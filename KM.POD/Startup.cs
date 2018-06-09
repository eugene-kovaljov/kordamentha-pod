using KM.POD.Data.Providers;
using KM.POD.Identity;
using KM.POD.Identity.Models;
using KM.POD.Services;
using KM.POD.WebSPA.Server.SignalR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace KM.POD.WebSPA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IRoleStore<ApplicationRole>, RoleStore>();
            services.AddTransient<IUserStore<ApplicationUser>, UserStore>();

            services.AddTransient<ISMSService, SMSService>();
            services.AddTransient<IEmailService, EmailService>();

            services.AddScoped<IConnectionProvider, ConnectionProvider>();

            ConfigureAuthService(services);

            RegisterAppInsights(services);

            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(Server.Infrastructure.Filters.HttpGlobalExceptionFilter));
                options.Filters.Add(typeof(Server.Infrastructure.Filters.ValidateModelStateFilterAttribute));
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            RegisterSignalR(services);
            RegisterSwagger(services);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment() || env.IsStaging())
            {
                app.UseDeveloperExceptionPage();
            }

            ConfigureLogging(app, loggerFactory);
            ConfigureAuth(app);
            ConfigureSwagger(app);

            app.UseDefaultFiles(); 
            app.UseStaticFiles(); 

            app.UseCors("CorsPolicy");
            app.UseSignalR(routes =>
            {
                routes.MapHub<SignalRHub>("/signalR");
            });

            app.UseMvc();
        }

        #region Registration

        private void RegisterSignalR(IServiceCollection services)
        {
            services.AddTransient<ISignalRHub, SignalRHub>();
            services.AddSignalR();
        }

        private void RegisterAppInsights(IServiceCollection services)
        {
            services.AddApplicationInsightsTelemetry(Configuration);
        }

        private void RegisterSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.DescribeAllEnumsAsStrings();
                options.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Title = "POD HTTP API",
                    Version = "v1",
                    Description = "The POD Service HTTP API",
                    TermsOfService = "POD Terms"
                });
                options.OperationFilter<Server.Infrastructure.Filters.AuthorizeCheckOperationFilter>();
                options.AddSecurityDefinition("Bearer", new Swashbuckle.AspNetCore.Swagger.ApiKeyScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });
                var security = new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", new string[] { }},
                };
                options.AddSecurityRequirement(security);
            });
        }

        #endregion

        #region Configuration
        private void ConfigureLogging(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddAzureWebAppDiagnostics();
            loggerFactory.AddApplicationInsights(app.ApplicationServices, LogLevel.Trace);
        }

        private void ConfigureAuthService(IServiceCollection services)
        {
            services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
            {
                options.SignIn.RequireConfirmedPhoneNumber = true;
                options.SignIn.RequireConfirmedEmail = false;

                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);

                options.User.RequireUniqueEmail = true;

                options.Password.RequireDigit =
                options.Password.RequireLowercase =
                options.Password.RequireUppercase =
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequiredLength = ApplicationUserSettings.PasswordMinLength;
            })
            .AddDefaultTokenProviders();

            services.Configure<SecurityStampValidatorOptions>(options =>
            {
                // enables immediate logout, after updating the user's stat.
                options.ValidationInterval = TimeSpan.Zero;
            });

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // remove default claims
            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, cfg =>
                {
                    // TODO: use https and set true on release
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;

                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = Configuration["AuthTokenIssuer"],
                        ValidateIssuer = false,
                        ValidAudience = Configuration["AuthTokenIssuer"],
                        ValidateAudience = false,
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(Configuration["AuthTokenKey"])),
                        ClockSkew = TimeSpan.Zero, // remove delay of token when expire                        
                    };
                    cfg.Events = new JwtBearerEvents
                    {
                        OnTokenValidated = async context =>
                        {
                            var userManager = (UserManager<ApplicationUser>)context.HttpContext.RequestServices.GetService(typeof(UserManager<ApplicationUser>));
                            var user = await userManager.FindByEmailAsync(context.Principal.Identity.Name);
                            var accessToken = context.SecurityToken as JwtSecurityToken;
                            if (accessToken != null)
                            {
                                ClaimsIdentity identity = context.Principal.Identity as ClaimsIdentity;
                                if (identity != null)
                                {
                                    var securityStamp = identity.Claims.SingleOrDefault(c => c.Type == nameof(user.SecurityStamp));
                                    if(securityStamp == null || !string.Equals(securityStamp.Value, user.SecurityStamp))
                                    {
                                        context.Fail(new Identity.Exceptions.InvalidTokenException($"Token for user {user.Email} is not valid"));
                                    }
                                }
                            }
                        }
                    };
                });

            services.AddAuthorization();
        }

        protected virtual void ConfigureAuth(IApplicationBuilder app)
        {
            app.UseAuthentication();
        }

        private void ConfigureSwagger(IApplicationBuilder app)
        {
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "POD API V1");
            });
        }

        #endregion
    }
}    
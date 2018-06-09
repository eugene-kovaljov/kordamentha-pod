using System.Linq;
using System.Threading.Tasks;
using KM.POD.Identity.Enums;
using KM.POD.Identity.Models;
using KM.POD.Services;
using KM.POD.WebSPA.Server.Infrastructure.Exceptions;
using KM.POD.WebSPA.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace KM.POD.WebSPA.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class AccountController : BaseController
    {
        private readonly IConfiguration configuration;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly ISMSService smsService;
        private readonly IEmailService emailService;
        private readonly ILogger<AccountController> logger;

        public AccountController(IConfiguration _configuration, ISMSService _smsService,
            IEmailService _emailService, SignInManager<ApplicationUser> _signInManager,
            UserManager<ApplicationUser> _userManager, ILogger<AccountController> _logger)
        {
            configuration = _configuration;
            signInManager = _signInManager;
            userManager = _userManager;
            smsService = _smsService;
            emailService = _emailService;
            logger = _logger;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var signInResult = await signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: true);
            if (!signInResult.Succeeded)
            {
                return BadRequest("Login failed");
            }

            var appUser = await userManager.FindByNameAsync(model.Email);
            if (appUser == null)
            {
                return NotFound(model.Email);
            }
            if (appUser.IsDeleted)
            {
                return Forbid(model.Email);
            }
            var roles = await userManager.GetRolesAsync(appUser);
            var token = await Identity.Helpers.AuthHelper.GenerateJwtToken(configuration, appUser, roles);
            var loginResult = new LoginResult
            {
                Email = appUser.Email,
                Token = token
            };

            return Ok(loginResult);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            var user = await userManager.FindByNameAsync(User.Identity.Name);
            await userManager.UpdateSecurityStampAsync(user);
            await signInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // TODO: add converters
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber = model.Phone
            };
            var creationResult = await userManager.CreateAsync(user);
            if (!creationResult.Succeeded)
            {
                creationResult.Errors.ToList().ForEach(x => {
                    logger.LogWarning($"User {model.Email} creation error: {x.Description}.");
                    ModelState.AddModelError(string.Empty, x.Description);
                });
                return BadRequest(ModelState);
            }
            var roleAssignementResult = await userManager.AddToRoleAsync(user, nameof(ApplicationRole.Client));
            if (!roleAssignementResult.Succeeded)
            {
                roleAssignementResult.Errors.ToList().ForEach(x => {
                    logger.LogWarning($"User role {model.Email} assignment error: {x.Description}.");
                    ModelState.AddModelError(string.Empty, x.Description);
                });
                return BadRequest(ModelState);
            }

            logger.LogInformation($"User {model.Email} created.");
            var verificationCode = await userManager.GenerateChangePhoneNumberTokenAsync(user, user.PhoneNumber);
            if (string.IsNullOrWhiteSpace(verificationCode))
            {
                logger.LogError($"Verification code creation for user {user.Email} failed.");
                throw new VerificationCodeNotCreatedException(user.Email);
            }

            await smsService.SendVerificationCode(model.Phone, verificationCode);
            logger.LogInformation($"Phone verification code was sent to {model.Email}.");

            // TODO: remove code from return after SMS external service implementation
            return Ok(new { code = verificationCode });
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SetPassword([FromBody] SetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return NotFound(model.Email);
            }
            var resetResult = await userManager.ResetPasswordAsync(user, model.PasswordToken, model.Password);
            if (!resetResult.Succeeded)
            {
                resetResult.Errors.ToList().ForEach(x => {
                    logger.LogWarning($"{model.Email} password set error: {x.Description}.");
                    ModelState.AddModelError(string.Empty, x.Description);
                });
                return BadRequest(ModelState);
            }
            logger.LogInformation($"Password was set to {model.Email}.");
            // TODO: send email register confirmation
            await emailService.Send();

            IActionResult loginResult = await Login(new LoginViewModel
            {
                Email = model.Email,
                Password = model.Password
            });
            return loginResult;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResendPhoneConfirmation([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return NotFound(model.Email);
            }
            if (user.PhoneNumberConfirmed)
            {
                var message = $"{model.Email} phone is already confirmed.";
                ModelState.AddModelError(string.Empty, message);
                logger.LogError(message);
                return BadRequest(ModelState);
            }

            var verificationCode = await userManager.GenerateChangePhoneNumberTokenAsync(user, user.PhoneNumber);
            if (string.IsNullOrWhiteSpace(verificationCode))
            {
                logger.LogError($"Verification code creation for user {user.Email} failed");
                throw new VerificationCodeNotCreatedException(user.Email);
            }

            await smsService.SendVerificationCode(model.Phone, verificationCode);
            logger.LogInformation($"Phone verification code was sent to {model.Email}.");
            // TODO: remove code from return after SMS external service implementation
            return Ok(new { code = verificationCode });
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmPhone([FromBody] ConfirmPhoneViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appUser = await userManager.FindByNameAsync(model.Email);
            if (appUser == null)
            {
                return NotFound(model.Email);
            }
            if (appUser.PhoneNumberConfirmed)
            {
                var message = $"{model.Email} phone is already confirmed.";
                ModelState.AddModelError(string.Empty, message);
                logger.LogError(message);
                return BadRequest(ModelState);
            }

            var changeResult = await userManager.ChangePhoneNumberAsync(appUser, model.Phone, model.Code);
            if (!changeResult.Succeeded)
            {
                changeResult.Errors.ToList().ForEach(x => {
                    logger.LogWarning($"{model.Email} phone confirmation failed: {x.Description}.");
                    ModelState.AddModelError(string.Empty, x.Description);
                });
                return BadRequest(ModelState);
            }

            var passwordResetToken = await userManager.GeneratePasswordResetTokenAsync(appUser);
            if (string.IsNullOrWhiteSpace(passwordResetToken))
            {
                logger.LogError($"Password change token creation for user {appUser.Email} failed.");
                throw new PasswordChangeTokenNotCreatedException(appUser.Email);
            }
            var phoneConfirmationResult = new PhoneConfirmationResult
            {
                Token = passwordResetToken
            };
            return Ok(phoneConfirmationResult);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return NotFound(model.Email);
            }
            var resetResult = await userManager.ResetPasswordAsync(user, model.ChangePasswordToken, model.Password);
            if (!resetResult.Succeeded)
            {
                resetResult.Errors.ToList().ForEach(x =>
                {
                    logger.LogWarning($"{model.Email} change password error: {x.Description}.");
                    ModelState.AddModelError(string.Empty, x.Description);
                });
                return BadRequest(ModelState);
            }
            // TODO: send email register confirmation
            logger.LogInformation($"Password was changed for {model.Email}.");
            IActionResult loginResult = await Login(new LoginViewModel
            {
                Email = model.Email,
                Password = model.Password
            });
            return loginResult;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return NotFound(model.Email);
            }
            var passwordResetToken = await userManager.GeneratePasswordResetTokenAsync(user);
            if (string.IsNullOrWhiteSpace(passwordResetToken))
            {
                logger.LogError($"Forgot password token creation for user {user.Email} failed.");
                throw new ForgotPasswordTokenNotCreatedException(user.Email);
            }
            // TODO: send email register confirmation
            await emailService.Send();
            logger.LogInformation($"Forgot password link was sent to {model.Email}.");
            // TODO: remove code from return after Email external service implementation
            return Ok(new {Token= passwordResetToken });
        }
    }
}

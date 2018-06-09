using KM.POD.Identity.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KM.POD.Identity.Helpers
{
    public static class AuthHelper
    {
        public static async Task<string> GenerateJwtToken(IConfiguration configuration, ApplicationUser user, IEnumerable<string> userRoles)
        {
            var claims = GetValidClaims(user, userRoles);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AuthTokenKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["AuthTokenExpireDays"]));

            var token = new JwtSecurityToken(
                configuration["AuthTokenIssuer"],
                configuration["AuthTokenIssuer"],
                claims: claims,
                expires: expires,
                signingCredentials: creds
            );

            return await Task.FromResult(new JwtSecurityTokenHandler().WriteToken(token));
        }

        private static List<Claim> GetValidClaims(ApplicationUser user, IEnumerable<string> userRoles)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(nameof(user.SecurityStamp), user.SecurityStamp)
            };
            foreach (var userRole in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            return claims;
        }
    }
}

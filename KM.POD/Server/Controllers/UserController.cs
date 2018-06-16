using KM.POD.Identity.Enums;
using KM.POD.Identity.Models;
using KM.POD.WebSPA.Server.Infrastructure.Attributes;
using KM.POD.WebSPA.ViewModels;
using KM.POD.WebSPA.ViewModels.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace KM.POD.WebSPA.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class UserController : BaseController
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly ILogger<UserController> logger;

        public UserController(UserManager<ApplicationUser> _userManager, ILogger<UserController> _logger)
        {
            userManager = _userManager;
            logger = _logger;
        }

        [HttpPut]
        [Authorize(Roles = nameof(ApplicationRole.SystemAdministrator))]
        public async Task<IActionResult> UpdateFullInfo(UserFullInfoViewModel userInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await userManager.FindByIdAsync(userInfo.UserId.ToString());
            if (user == null)
            {
                logger.LogWarning($"User info not found: {userInfo.UserId}");
                return NotFound(userInfo.UserId);
            }

            // TODO: add converters
            user.UserName = userInfo.FirstName;
            user.LastName = userInfo.LastName;
            user.Email = userInfo.Email;
            user.PhoneNumber = userInfo.Phone;
            // TODO: assign Office when implemented
            // TODO: update Roles when Role manager implemented

            await userManager.UpdateAsync(user);
            logger.LogInformation($"User info updated: {user.Email}");
            var info = await GetInfo(userInfo.UserId);
            return Ok(info);
        }

        [HttpGet]
        public async Task<IActionResult> GetInfo([RequiredGuid]Guid userId)
        {
            var user = await userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return NotFound(userId);
            }
            if (IsClient)
            {
                var info = new UserInfoResult
                {
                    UserId = userId,
                    Email = user.Email,
                    FirstName = user.UserName,
                    LastName = user.LastName,
                    Phone = user.PhoneNumber
                };
                return Ok(info);
            }
            else
            {
                var roles = await userManager.GetRolesAsync(user);
                var info = new UserFullInfoResult
                {
                    UserId = userId,
                    Email = user.Email,
                    FirstName = user.UserName,
                    LastName = user.LastName,
                    Phone = user.PhoneNumber,
                    // TODO: set office when implemented
                    Office = string.Empty,
                    Roles = roles
                };
                return Ok(info);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateInfo(UserInfoViewModel userInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await userManager.FindByIdAsync(userInfo.UserId.ToString());
            if (user == null)
            {
                logger.LogWarning($"User info not found: {userInfo.UserId}");
                return NotFound(userInfo.UserId);
            }
            if (IsEmployee && (!user.PhoneNumber.Equals(userInfo.Phone, StringComparison.InvariantCultureIgnoreCase) ||
                !user.Email.Equals(userInfo.Email, StringComparison.InvariantCultureIgnoreCase)))
            {
                return Forbid();
            }
            // TODO: add converters
            user.UserName = userInfo.FirstName;
            user.LastName = userInfo.LastName;
            user.Email = userInfo.Email;
            user.PhoneNumber = userInfo.Phone;

            await userManager.UpdateAsync(user);
            logger.LogInformation($"User info updated: {user.Email}");
            var info = await GetInfo(userInfo.UserId);
            return Ok(info);
        }
    }
}

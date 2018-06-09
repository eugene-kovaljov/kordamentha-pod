using KM.POD.Identity.Enums;
using Microsoft.AspNetCore.Mvc;

namespace KM.POD.WebSPA.Server.Controllers
{
    public abstract class BaseController : Controller
    {
        protected bool IsClient => User.IsInRole(nameof(ApplicationRole.Client));
        protected bool IsEmployee => !User.IsInRole(nameof(ApplicationRole.Client));
    }
}

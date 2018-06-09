using Microsoft.AspNetCore.Identity;
using System;

namespace KM.POD.Identity.Models
{
    public class ApplicationUser: IdentityUser<Guid>
    {
        public bool IsDeleted { get; set; }

        public string LastName { get; set; } = string.Empty;
    }
}

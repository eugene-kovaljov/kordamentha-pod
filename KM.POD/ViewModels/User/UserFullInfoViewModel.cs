using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels.User
{
    public class UserFullInfoViewModel : UserInfoViewModel
    {
        public List<string> Roles { get; set; }
        [Required]
        public string Office { get; set; }
    }
}

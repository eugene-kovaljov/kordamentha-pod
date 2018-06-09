using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class ChangePasswordViewModel: PasswordViewModel
    {
        [Required]
        [Display(Name = "Change password token")]
        public string ChangePasswordToken { get; set; }
    }
}

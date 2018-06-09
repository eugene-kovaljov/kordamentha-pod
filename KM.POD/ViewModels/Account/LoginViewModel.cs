using KM.POD.Identity;
using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class LoginViewModel: BaseLoginViewModel
    {
        [Required]
        [DataType(DataType.Password)]
        [StringLength(ApplicationUserSettings.PasswordMaxLength,
            ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.",
            MinimumLength = ApplicationUserSettings.PasswordMinLength)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class SetPasswordViewModel: PasswordViewModel
    {
        [Required]
        [Display(Name = "Password token")]
        public string PasswordToken { get; set; }
    }
}

using KM.POD.Identity;
using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class RegisterEmployeeViewModel : RegisterViewModel
    {
        [Required]
        [DataType(DataType.Password)]
        [StringLength(ApplicationUserSettings.PasswordMaxLength,
            ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.",
            MinimumLength = ApplicationUserSettings.PasswordMinLength)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required]
        [StringLength(ApplicationUserSettings.FirstNameMaxLength)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(ApplicationUserSettings.LastNameMaxLength)]
        public string LastName { get; set; }
        [Required]
        public int OfficeId { get; set; }
    }
}

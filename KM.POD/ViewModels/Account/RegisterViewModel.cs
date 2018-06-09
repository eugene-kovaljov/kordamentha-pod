using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class RegisterViewModel: BaseLoginViewModel
    {
        [Required]
        [Phone]
        [RegularExpression("^(\\+61)\\d{9}$", ErrorMessage = "The phone is not valid. Should be +61xxxxxxxxx")]
        [Display(Name = "Phone")]
        public string Phone { get; set; }
    }
}

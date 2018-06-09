using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class ConfirmPhoneViewModel : RegisterViewModel
    {
        [Required]
        [RegularExpression("^\\d{6}$", ErrorMessage = "The code is not valid.")]
        [Display(Name = "Code")]
        public string Code { get; set; }
    }
}

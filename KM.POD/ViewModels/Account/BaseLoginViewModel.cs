using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public abstract class BaseLoginViewModel
    {
        [Required]
        [EmailAddress]
        [StringLength(50)]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}

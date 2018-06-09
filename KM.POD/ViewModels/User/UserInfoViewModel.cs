using System;
using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels
{
    public class UserInfoViewModel
    {
        [Required]
        public Guid UserId { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [Required]
        [Phone]
        [RegularExpression("^(\\+61)\\d{9}$", ErrorMessage = "The phone is not valid. Should be +61xxxxxxxxx")]
        public string Phone { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}

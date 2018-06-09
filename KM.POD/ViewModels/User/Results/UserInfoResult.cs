using System;

namespace KM.POD.WebSPA.ViewModels
{
    public class UserInfoResult
    {
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}

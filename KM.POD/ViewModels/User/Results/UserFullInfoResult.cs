using System.Collections.Generic;

namespace KM.POD.WebSPA.ViewModels
{
    public class UserFullInfoResult : UserInfoResult
    {
        public IList<string> Roles { get; set; }
        public string Office { get; set; }
    }
}

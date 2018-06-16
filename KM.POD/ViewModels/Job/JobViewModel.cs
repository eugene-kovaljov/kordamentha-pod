using KM.POD.WebSPA.Server.Infrastructure.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace KM.POD.WebSPA.ViewModels.Job
{
    public class JobViewModel
    {
        [Required]
        public string CompanyName { get; set; }
        [RequiredGuid]
        public Guid ContactUserId { get; set; }
        [Required]
        [Url]
        public string KMWebLink { get; set; }
        [Required]
        [Url]
        public string OfficialSiteWebLink { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}

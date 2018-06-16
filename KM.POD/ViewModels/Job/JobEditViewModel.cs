using KM.POD.WebSPA.Server.Infrastructure.Attributes;
using System;

namespace KM.POD.WebSPA.ViewModels.Job
{
    public class JobEditViewModel: JobViewModel
    {
        [RequiredGuid]
        public Guid JobId { get; set; }
    }
}

using KM.POD.Data;
using KM.POD.Identity.Enums;
using KM.POD.WebSPA.Server.Infrastructure.Attributes;
using KM.POD.WebSPA.ViewModels.Job;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KM.POD.WebSPA.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class JobController : BaseController
    {
        private readonly ILogger<JobController> logger;
        private readonly IJobRepository jobRepository;

        public JobController(ILogger<JobController> _logger, IJobRepository _jobRepository)
        {
            logger = _logger;
            jobRepository = _jobRepository;
        }
        [HttpGet]
        [Route("get/{jobId}")]
        public async Task<IActionResult> Get([RequiredGuid]Guid jobId)
        {
            if (IsClient)
            {
                return Forbid();
            }
            var job = await jobRepository.GetById(jobId);
            if (job == null)
            {
                logger.LogWarning($"Job not found: {jobId}");
                return NotFound();
            }
            if (IsAdmin)
            {
                return Ok(new JobFullResult
                {
                    JobId = job.JobId,
                    CompanyName = job.CompanyName,
                    Description = job.Description,
                    IsActive = job.IsActive,
                    KMWebLink = job.KMWebLink
                });
            }
            return Ok(new JobEmployeeResult
            {
                JobId = job.JobId,
                CompanyName = job.CompanyName,
                Description = job.Description,
                KMWebLink = job.KMWebLink,
                OfficialSiteWebLink = job.OfficialSiteWebLink
            });
        }

        [HttpGet]
        [Route("get")]
        public async Task<IActionResult> GetAll()
        {
            IEnumerable<Job> allJobs = null;
            if (IsAdmin)
            {
                allJobs = await jobRepository.GetAll();
                var adminJobs = allJobs.Select(x => new JobFullResult
                {
                    JobId = x.JobId,
                    CompanyName = x.CompanyName,
                    Description = x.Description,
                    IsActive = x.IsActive,
                    KMWebLink = x.KMWebLink,
                    OfficialSiteWebLink = x.OfficialSiteWebLink
                });
                return Ok(adminJobs);
            }

            allJobs = await jobRepository.GetAll(x => x
                .Where($"{nameof(Job.IsActive):C}=@IsActive")
                .WithParameters(new { IsActive = true }));

            if (IsEmployee)
            {
                var employeeJobs = allJobs.Select(x => new JobEmployeeResult
                {
                    JobId = x.JobId,
                    CompanyName = x.CompanyName,
                    Description = x.Description,
                    KMWebLink = x.KMWebLink,
                    OfficialSiteWebLink = x.OfficialSiteWebLink
                });
                return Ok(employeeJobs);
            }
            else if (IsClient)
            {
                var clientJobs = allJobs.Select(x => new JobClientResult
                {
                    JobId = x.JobId,
                    CompanyName = x.CompanyName,
                    KMWebLink = x.KMWebLink
                });
                return Ok(clientJobs);
            }
            return Forbid();
        }

        [HttpPost]
        [Route("create")]
        [Authorize(Roles = nameof(ApplicationRole.SystemAdministrator))]
        public async Task<IActionResult> Create(JobViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // TODO: add converters
            var job = new Job
            {
                CompanyName = model.CompanyName,
                Description = model.Description,
                KMWebLink = model.KMWebLink,
                OfficialSiteWebLink = model.OfficialSiteWebLink,
                IsActive = model.IsActive
            };
            await jobRepository.Add(job);
            return Ok(job);
        }

        [HttpPut]
        [Route("update")]
        [Authorize(Roles = nameof(ApplicationRole.SystemAdministrator))]
        public async Task<IActionResult> Update(JobEditViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // TODO: add converters
            var job = new Job
            {
                JobId = model.JobId,
                CompanyName = model.CompanyName,
                Description = model.Description,
                KMWebLink = model.KMWebLink,
                OfficialSiteWebLink = model.OfficialSiteWebLink,
                IsActive = model.IsActive
            };
            await jobRepository.Update(job);
            return Ok(model);
        }

        [HttpPost]
        [Route("activate/{jobId}/{activate}")]
        [Authorize(Roles = nameof(ApplicationRole.SystemAdministrator))]
        public async Task<IActionResult> Activate([FromRoute][RequiredGuid]Guid jobId, [FromRoute]bool activate)
        {
            var job = await jobRepository.ActivateAsync(jobId, activate);
            return Ok(job);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DragShop.Core.Repositories;
using DragShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DragShop.Controllers
{
    [Route("api/[controller]")]
    public class AboutUsController : ApiControllerBase
    {
        private readonly IAboutUsRepository aboutUsRepository;

        public AboutUsController(IAboutUsRepository aboutUsRepository)
        {
            this.aboutUsRepository = aboutUsRepository;
        }

        [HttpGet("{infoID}")]
        public async Task<IActionResult> GetHistory(int infoID)
        {
            var (info, errors) = await this.aboutUsRepository.GetInfo(infoID);

            if (errors != null && errors.Any())
            {
                return this.ResolveErrorStatusCode(errors.First());
            }

            return this.Ok(info);
        }

    }
}

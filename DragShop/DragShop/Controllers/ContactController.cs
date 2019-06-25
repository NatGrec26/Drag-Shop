using Microsoft.Extensions.Configuration;
using DragShop.Models;
using DragShop.Secrets;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : ApiControllerBase
    {
     //   private readonly WebAppSettings _WebAppSettings;
        private readonly IEmailSender _emailSender;

        public ContactController(
       //     IConfiguration configuration,
            IEmailSender emailSender
            )
            : base()
        {
       //     _WebAppSettings = configuration.Get<WebAppSettings>();
            _emailSender = emailSender;
        }

        [HttpPost("sendemail")]
        public async Task<IActionResult> SendEmailCustomer([FromBody] SendEmailCustomer model)
        {
            if (model == null)
            {
                return NotFound();
            }

            await _emailSender.SendEmailAsync(model.Email, "Nueva Pregunta Drag&Shop",
               $"<h3>Nombre Completo </h3>" + model.FirstName + "  " + model.LastName + "<br>" +
               "<h3>Teléfono  </h3>" + model.PhoneNumber +
                "<br>" + "<h3>Mensaje</h3>" + model.Message + "<br>" +
                "<h2>Muchas gracias!</h2>");
            return NoContent();
        }
    }
}

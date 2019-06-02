using DragShop.Security;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static DragShop.Security.SecretsConstants;

namespace DragShop.Services.Email
{
    public class GmailClientEmailSender : SmtpClientBase<SmtpClientSettings>
    {
        public GmailClientEmailSender(IConfiguration configuration) : base(configuration)
        {
        }

        public override string ConfigSection => GmailSmtpClientSection;

        public override bool EnableSsl => true;

        public override bool IsBodyHtml => true;

        public override string Host => "smtp.gmail.com";

        public override int Port => 587;
    }
}

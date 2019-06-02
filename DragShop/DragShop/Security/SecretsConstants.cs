using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Security
{
    public sealed class SecretsConstants
    {
        public const string ClientAppUrl = "ClientApp:Url";
        public const string GmailSmtpClientSection = "GmailSmtpClient";
        public const string JwtSection = "JWT";
        public const string JwtApiKey = "JWT:ApiJwtKey";
        public const string SeedDataSection = "SeedData";
        public const string SendGridSection = "SendGrid";
        /// public const string VillarealConnectionString = "Villarreal"; CAMBIAR
    }
}

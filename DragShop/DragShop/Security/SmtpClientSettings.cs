using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Security
{
    public class SmtpClientSettings
    {
        public string SendEmailFrom { get; set; }
        public string SendEmailName { get; set; }
        public string Password { get; set; }

    }
}

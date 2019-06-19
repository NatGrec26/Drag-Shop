using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Secrets
{
    public class WebAppSettings
    {
        public string ClientAppUrl { get; set; }
        public string SendEmailFrom { get; set; }
        public string SendEmailName { get; set; }
        public string SendGridUser { get; set; }
        public string SendGridKey { get; set; }
        public List<string> ConnectionStrings { get; set; }
    }
}

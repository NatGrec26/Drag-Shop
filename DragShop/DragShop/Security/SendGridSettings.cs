using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Security
{
    public class SendGridSettings
    {
        public string Key { get; set; }
        public string SendEmailFrom { get; set; }
        public string SendEmailName { get; set; }
    }
}

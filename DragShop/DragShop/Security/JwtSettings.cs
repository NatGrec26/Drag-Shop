using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Security
{
    public class JwtSettings
    {
        public string ApiJwtKey { get; set; }
        public string Audience { get; set; }
        public string JwtIssuer { get; set; }
        public decimal JwtExpireMinutes { get; set; }
    }
}

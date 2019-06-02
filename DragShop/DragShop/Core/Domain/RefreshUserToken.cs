using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Domain
{
    public class RefreshUserToken
    {
        public string RefreshUserTokenId { get; set; }
        public string HashedToken { get; set; }
        public string TokenSalt { get; set; }
        public string RefreshToken { get; set; }
        public string UserId { get; set; }
        public DateTime DateCreated { get; set; }

        public virtual User User { get; set; }
    }
}

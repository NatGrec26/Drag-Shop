using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace DragShop.Core.Domain
{
    public class User : IdentityUser<string>
    {
        public User() : base()
        {
            this.InitializeLists();
        }
        public User(string userName) : base(userName)
        {
            this.InitializeLists();
        }

        //public int PartyId { get; set; }
        //public Party Party { get; set; }

        public virtual ICollection<RefreshUserToken> RefreshTokens { get; set; }

        protected virtual void InitializeLists()
        {
            this.RefreshTokens = new HashSet<RefreshUserToken>();

        }
    }
}

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Domain
{
    public class Role : IdentityRole<string>
    {
        
        public Role() : base()
        {

        }

        public Role(string roleName) : base(roleName)
        {

        }
    }
}

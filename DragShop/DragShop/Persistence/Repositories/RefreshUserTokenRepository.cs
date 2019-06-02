using DragShop.Core.Domain;
using DragShop.Core.Repositories;
using DragShop.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.Repositories
{
    public class RefreshUserTokenRepository : Repository<RefreshUserToken>, IRefreshUserTokenRepository
    {
        public RefreshUserTokenRepository(ApplicationDbContext context) : base(context) { }
    }
}

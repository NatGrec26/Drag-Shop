using DragShop.Core.Domain;
using DragShop.Dtos;
using DragShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Repositories
{
    public interface IRoleRepository : IRepository<Role>
    {
        Task<(IEnumerable<RoleModel>, ErrorDto)> GetAllRoles();
    }
}

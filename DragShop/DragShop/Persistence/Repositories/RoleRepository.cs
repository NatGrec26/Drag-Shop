using AutoMapper;
using DragShop.Dtos;
using DragShop.Core.Domain;
using DragShop.Core.Repositories;
using DragShop.DbContext;
using DragShop.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.Repositories
{
    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        private readonly IMapper mapper;

        public RoleRepository(
            ApplicationDbContext context,
            IMapper mapper
            ) : base(context)
        {
            this.mapper = mapper;
        }

        public Task<(IEnumerable<RoleModel>, ErrorDto)> GetAllRoles()
            => Task.FromResult((this.mapper.Map<IEnumerable<RoleModel>>(this.Context.Roles.AsNoTracking()), null as ErrorDto));
    }
}

using DragShop.Core.Domain;
using DragShop.Persistence.EntityConfigurations;
using DragShop.Persistence.SeedingConfiguration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.DbContext
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, string, UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        private IHostingEnvironment _environment;
        #region Constructor
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options,
            IHostingEnvironment enviroment
            ) : base(options)
        {
            _environment = enviroment;
        }
        #endregion

        public virtual DbSet<RefreshUserToken> RefreshUserTokens { get; set; }

        #region Override
        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.ApplyConfiguration(new RefreshUserTokenConfiguration());


            this.SeedData(builder);
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new UserClaimConfiguration());
            builder.ApplyConfiguration(new UserLoginConfiguration());
            builder.ApplyConfiguration(new UserRoleConfiguration());
            builder.ApplyConfiguration(new UserTokenConfiguration());
            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new RoleClaimConfiguration());

        }
        #endregion


        #region Protected Methods
        protected virtual void SeedData(ModelBuilder builder)
        {
            ISeedInitializer seedInitializer = null;
            if (_environment.IsDevelopment())
            {
                seedInitializer = new DevelopmentSeedInitializer();
            }

            seedInitializer?.SeedData(builder);
        }
        #endregion


        #region
        public virtual DbSet<Product> Products { get; set; }

        #endregion
    }
}

using DragShop.Core.Repositories;
using DragShop.Persistence.Repositories;
using DragShop.Security;
using DragShop.Services.Database;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop
{
    public partial class Startup
    {
        public IServiceCollection AddHelpers(IServiceCollection services)
        {
            services.AddSingleton<ISecurityHelper, SecurityHelper>();
            services.AddSingleton<IDapperHelper, DapperHelper>();

            return services;
        }

        public IServiceCollection AddMenuPolicies(IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                options.AddPolicy(PoliciesConstants.CoursesRead, policy => policy.RequireClaim(ClaimsConstants.Courses, ClaimTypesConstants.Read));
                options.AddPolicy(PoliciesConstants.CoursesWrite, policy => policy.RequireClaim(ClaimsConstants.Courses, ClaimTypesConstants.Write));
                options.AddPolicy(PoliciesConstants.CoursesDelete, policy => policy.RequireClaim(ClaimsConstants.Courses, ClaimTypesConstants.Delete));
            });
            return services;
        }

        public IServiceCollection AddRepositories(IServiceCollection services)
        {
            services.AddTransient<IRoleRepository, RoleRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IAboutUsRepository, AboutUsRepository>();
            return services;
        }
    }
}

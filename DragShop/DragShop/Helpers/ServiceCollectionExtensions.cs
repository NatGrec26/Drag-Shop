using DragShop.Core.Repositories;
using DragShop.Persistence.Repositories;
using DragShop.Security;
using DragShop.Services.Database;
using DragShop.Services.Email;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCustomRepositories(this IServiceCollection services)
        {
            services.AddTransient<IRefreshUserTokenRepository, RefreshUserTokenRepository>();
            services.AddTransient<IRoleRepository, RoleRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            return services;
        }

        public static IServiceCollection AddMenuPolicies(this IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                // Add custom policies for admin actions.
                // options.AddPolicy(PoliciesConstants.AccesesRead, policy => policy.RequireClaim(ClaimsConstants.Accesses, ClaimTypesConstants.Read));

            });
            return services;
        }

        public static IServiceCollection AddCustomSingletons(this IServiceCollection services)
        {
            services.AddSingleton<ISecurityHelper, SecurityHelper>();
            services.AddSingleton<IEmailSender, GmailClientEmailSender>();
            services.AddSingleton<IDapperHelper, DapperHelper>();
            //services.AddSingleton<ILogger, StubLogger>();
            //services.AddSingleton<IFileHelper, FileHelper>();
            return services;
        }

    }
}

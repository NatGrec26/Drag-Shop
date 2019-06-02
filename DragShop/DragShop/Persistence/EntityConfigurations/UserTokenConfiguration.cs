using DragShop.Core.Domain;
using Microsoft.EntityFrameworkCore;
using DragShop.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.EntityConfigurations
{
    public class UserTokenConfiguration : IEntityTypeConfiguration<UserToken>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<UserToken> builder)
        {
            builder.ToTable(typeof(UserToken).GetTableName());
        }
    }
}

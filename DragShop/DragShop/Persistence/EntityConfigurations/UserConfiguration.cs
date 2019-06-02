using DragShop.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DragShop.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.EntityConfigurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //builder.HasOne(p => p.Party)
            //    .WithMany(p => p.Users)
            //    .HasForeignKey(p => p.PartyId);

            builder.ToTable(typeof(User).GetTableName());
        }
    }
}

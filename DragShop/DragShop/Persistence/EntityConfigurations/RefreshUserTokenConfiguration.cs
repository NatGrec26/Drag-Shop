
using DragShop.Core.Domain;
using DragShop.Persistence.EntityConfigurations.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.EntityConfigurations
{
    public class RefreshUserTokenConfiguration : EntityConfigurationBase<RefreshUserToken>
    {
        protected override void ConfigureCustomProperties(EntityTypeBuilder<RefreshUserToken> builder)
        {
            builder.Property(p => p.RefreshToken)
           .HasMaxLength(50)
           .IsRequired();

            builder.Property(p => p.UserId)
           .HasMaxLength(450)
           .IsRequired();

            builder.Property(p => p.TokenSalt)
           .HasMaxLength(500)
           .IsRequired();

            builder.Property(p => p.HashedToken)
           .HasMaxLength(500)
           .IsRequired();

            builder.Property(p => p.DateCreated)
           .IsRequired();

            builder.HasOne(p => p.User)
                 .WithMany(p => p.RefreshTokens)
                 .HasForeignKey(p => p.UserId);
        }

        protected override KeyBuilder DefinePrimaryKey(EntityTypeBuilder<RefreshUserToken> builder)
       => builder.HasKey(p => p.RefreshUserTokenId);
    }
}

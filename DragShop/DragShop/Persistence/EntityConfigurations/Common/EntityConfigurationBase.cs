using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DragShop.Utilities;

namespace DragShop.Persistence.EntityConfigurations.Common
{
    public abstract class EntityConfigurationBase<TEntity> : IEntityTypeConfiguration<TEntity>
       where TEntity : class
    {
        public void Configure(EntityTypeBuilder<TEntity> builder)
        {
            this.DefinePrimaryKey(builder)
                .HasName(typeof(TEntity).GetPrimaryKeyName());

            this.ConfigureCustomProperties(builder);

            builder.ToTable(typeof(TEntity).GetTableName());
        }

        protected abstract void ConfigureCustomProperties(EntityTypeBuilder<TEntity> builder);

        protected abstract KeyBuilder DefinePrimaryKey(EntityTypeBuilder<TEntity> builder);
    }
}

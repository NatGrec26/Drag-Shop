using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.SeedingConfiguration
{
    public interface ISeedInitializer
    {
        void SeedData(ModelBuilder builder);

    }
}

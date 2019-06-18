using DragShop.Core.Domain;
using DragShop.Dtos;
using DragShop.Models;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        Task<(ProductResponseModel, IImmutableList<ErrorDto>)> GetProductById(int productId);
    }
}

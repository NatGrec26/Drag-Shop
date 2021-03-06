﻿using DragShop.Core.Domain;
using DragShop.Core.Repositories;
using DragShop.DbContext;
using DragShop.Dtos;
using DragShop.Models;
using DragShop.Services.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Persistence.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        private readonly IDapperHelper dapperHelper;

        public ProductRepository(ApplicationDbContext context, IDapperHelper dapperHelper) : base(context)
        {
            this.dapperHelper = dapperHelper;
        }

        public async Task<(ProductResponseModel, IImmutableList<ErrorDto>)> GetProductById(int productId)
        {
            var serverResponse = await this.dapperHelper.ExecuteSingleEntityStoredProcedureAsync<ProductResponseModel>("SP_GetProductById", new { @ProductID = productId });
            return (serverResponse, null);
        }
        public async Task<(IImmutableList<ProductAllResponseModel>, IImmutableList<ErrorDto>)> GetProduct()
        {
            var serverResponse = await this.dapperHelper.ExecuteStoredProcedureAsync<ProductAllResponseModel>("SP_GetProduct");
            return (serverResponse.ToImmutableList(), null);
        }
        public async Task<(IImmutableList<ProductAllResponseModel>, IImmutableList<ErrorDto>)> GetProductHome()
        {
            var serverResponse = await this.dapperHelper.ExecuteStoredProcedureAsync<ProductAllResponseModel>("SP_GetProductHomes");
            return (serverResponse.ToImmutableList(), null);
        }

        public async Task<(IImmutableList<ProductPicturesResponseModel>, IImmutableList<ErrorDto>)> GetProductPictures(int productId, int systemImageTypeId)
        {
            var serverResponse = await this.dapperHelper.ExecuteStoredProcedureAsync<ProductPicturesResponseModel>("SP_GetProducPictures",
                new { @ProductID = productId, @SystemImageTypeID = systemImageTypeId });
          
            return (serverResponse.ToImmutableList(), null);
        }
    }
}

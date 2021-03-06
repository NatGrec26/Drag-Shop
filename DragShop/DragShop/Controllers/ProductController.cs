﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DragShop.Core.Repositories;
using DragShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DragShop.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : ApiControllerBase
    {
        private readonly IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetProductByIdAsync(int Id)
        {
            var (product, errors) = await this.productRepository.GetProductById(Id);

            if (errors != null && errors.Any())
            {
                return this.ResolveErrorStatusCode(errors.First());
            }

            return this.Ok(product);
        }

        [HttpGet("product")]
        public async Task<IActionResult> GetProductAsync()
        {
            var (product, errors) = await this.productRepository.GetProduct();

            if (errors != null && errors.Any())
            {
                return this.ResolveErrorStatusCode(errors.First());
            }

            return this.Ok(product);
        }

        [HttpGet("productHome")]
        public async Task<IActionResult> GetProductHomeAsync()
        {
            var (product, errors) = await this.productRepository.GetProductHome();

            if (errors != null && errors.Any())
            {
                return this.ResolveErrorStatusCode(errors.First());
            }

            return this.Ok(product);
        }
   

    [HttpGet("pictures/{productId}/{systemImageTypeId}")]
    public async Task<IActionResult> GetProductPictures(int productId, int systemImageTypeId)
    {
        var (product, errors) = await this.productRepository.GetProductPictures(productId, systemImageTypeId);

        if (errors != null && errors.Any())
        {
            return this.ResolveErrorStatusCode(errors.First());
        }

        return this.Ok(product);
    }
}
}


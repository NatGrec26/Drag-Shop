using System;
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

        [HttpGet("productbyId")]
        public async Task<IActionResult> GetProductAsync()
        {
            var (product, errors) = await this.productRepository.GetProduct();

            if (errors != null && errors.Any())
            {
                return this.ResolveErrorStatusCode(errors.First());
            }

            return this.Ok(product);
        }

    }


}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DragShop.Dtos;
using DragShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DragShop.Controllers
{
    [ApiController]
    public abstract class ApiControllerBase : ControllerBase
    {
        public ObjectResult ResolveErrorStatusCode(ErrorDto error)
        {
            if (!int.TryParse(error.StatusCode, out int statusCode))
            {
                return this.StatusCode(500, this.CreateErrorMessageModel(error));
            }
            switch (statusCode)
            {
                case 404:
                    return this.StatusCode(statusCode, this.CreateErrorMessageModel(error));
                case 400:
                    return this.BadRequest(this.CreateErrorMessageModel(error));
                default:
                    return this.StatusCode(statusCode, this.CreateErrorMessageModel(error));
            }
        }

        protected ErrorMessageModel CreateErrorMessageModel(ErrorDto error)
            => this.CreateErrorMessageModel(error.ErrorCode, error.ErrorMessage);

        protected ErrorMessageModel CreateErrorMessageModel(string errorType, object errorMesage)
            => new ErrorMessageModel
            {
                ErrorType = errorType,
                ErrorMessage = errorMesage
            };
    }
}
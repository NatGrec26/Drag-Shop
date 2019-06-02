using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Dtos
{
    public class ErrorDto
    {

        public ErrorDto()
        {

        }

        public ErrorDto(string statusCode, string errorCode, object errorMessage)
        {
            this.StatusCode = statusCode;
            this.ErrorCode = errorCode;
            this.ErrorMessage = errorMessage;
        }

        public string StatusCode { get; set; }
        public string LogId { get; set; }
        public string ErrorCode { get; set; }
        public object ErrorMessage { get; set; }
    }
}

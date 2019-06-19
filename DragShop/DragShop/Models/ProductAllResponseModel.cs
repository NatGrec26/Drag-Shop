using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Models
{
    public class ProductAllResponseModel
    {
        public int ProductID { get; set; }

        public string Name { get; set; }

        public int LastPrice { get; set; }

        public string SystemImageUrl { get; set; }

    }
}

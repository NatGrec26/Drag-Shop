using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Models
{
    public class ProductResponseModel
    {
        public int ProductID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int LastPrice { get; set; }

        public string State { get; set; }

        public string Tutorial { get; set; }
    }
}
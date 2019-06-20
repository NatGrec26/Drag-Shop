using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Domain
{
    public class Product
    {
        public Product()
        {
           
        }

        public int ProductID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int LastPrice { get; set; }
        public int Tax { get; set; }
        public int SendingCost { get; set; }

        public string State { get; set; }

        public string Tutorial { get; set; }
    }
}

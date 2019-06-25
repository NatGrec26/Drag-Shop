using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Core.Domain
{
    public class CompanyInformation
    {

        public CompanyInformation() { }
        public int CompanyInformarionID { get; set; }
        public string CompanyInformationDescription { get; set; }

        public int TypeCompanyInformationID { get; set; }
    }
}

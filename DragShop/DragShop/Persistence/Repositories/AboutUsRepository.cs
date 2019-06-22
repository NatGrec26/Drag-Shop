using DragShop.Core.Domain;
using DragShop.Core.Repositories;
using DragShop.DbContext;
using DragShop.Dtos;
using DragShop.Models;
using DragShop.Services.Database;
using System.Collections.Immutable;
using System.Threading.Tasks;

namespace DragShop.Persistence.Repositories
{
    public class AboutUsRepository : Repository<CompanyInformation>, IAboutUsRepository
    {

        private readonly IDapperHelper dapperHelper;

        public AboutUsRepository(ApplicationDbContext context, IDapperHelper dapperHelper) : base(context)
        {
            this.dapperHelper = dapperHelper;
        }


        public async Task<(CompanyInformationResponseModel, IImmutableList<ErrorDto>)> GetInfo(int infoID)
        {
            var serverResponse = await this.dapperHelper.ExecuteSingleEntityStoredProcedureAsync<CompanyInformationResponseModel>("SP_GetInfo",new { @InfoID = infoID });
            return (serverResponse, null);
        }




    }
}

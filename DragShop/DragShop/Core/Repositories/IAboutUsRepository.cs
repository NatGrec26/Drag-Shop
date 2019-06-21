using DragShop.Core.Domain;
using DragShop.Dtos;
using DragShop.Models;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DragShop.Core.Repositories
{
    public interface IAboutUsRepository : IRepository<CompanyInformation>
    {
        Task<(CompanyInformationResponseModel, IImmutableList<ErrorDto>)> GetInfo(int infoID);


    }
}

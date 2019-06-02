using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Services.Database
{
    public interface IDapperHelper
    {
        Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName);
        Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName, object param);
        Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName, object param, string connectionString);
        Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName);
        Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName, object param);
        Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName, object param, string connectionString);
    }
}

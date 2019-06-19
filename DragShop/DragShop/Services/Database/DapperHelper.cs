using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace DragShop.Services.Database
{
    public class DapperHelper : IDapperHelper
    {
        private readonly string _awlaConnectionString;

        public DapperHelper(IConfiguration configuration)
        {
            this._awlaConnectionString = configuration.GetConnectionString("DRAGSHOP");
        }

        public async Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName)
            => await this.ExecuteStoredProcedureAsync<T>(storedProcedureName, null, _awlaConnectionString);

        public async Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName, object param)
            => await this.ExecuteStoredProcedureAsync<T>(storedProcedureName, param, _awlaConnectionString);

        public async Task<IEnumerable<T>> ExecuteStoredProcedureAsync<T>(string storedProcedureName, object param, string connectionString)
        {
            IEnumerable<T> elements;
            using (var connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();

                elements = await connection.QueryAsync<T>(storedProcedureName,
                            param: param,
                            commandType: CommandType.StoredProcedure);
            }
            return elements;
        }

        public async Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName)
            => await this.ExecuteSingleEntityStoredProcedureAsync<T>(storedProcedureName, null, _awlaConnectionString);

        public async Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName, object param)
        {
            return await this.ExecuteSingleEntityStoredProcedureAsync<T>(storedProcedureName, param, _awlaConnectionString);
        }

        public async Task<T> ExecuteSingleEntityStoredProcedureAsync<T>(string storedProcedureName, object param, string connectionString)
        {
            T element;
            using (var connection = new SqlConnection(this._awlaConnectionString))
            {
                await connection.OpenAsync();

                element = await connection.QuerySingleOrDefaultAsync<T>(storedProcedureName,
                                param: param,
                                commandType: CommandType.StoredProcedure);
            }
            return element;
        }
    }
}

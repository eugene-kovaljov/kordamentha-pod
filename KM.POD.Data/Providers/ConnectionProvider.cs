using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace KM.POD.Data.Providers
{
    public class ConnectionProvider: IConnectionProvider
    {
        private static string connectionString;

        public ConnectionProvider(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("PODConnection") ?? throw new System.ArgumentNullException("PODConnection");
        }

        public SqlConnection GetConnection()
        {
            return new SqlConnection(connectionString);
        }
    }
}

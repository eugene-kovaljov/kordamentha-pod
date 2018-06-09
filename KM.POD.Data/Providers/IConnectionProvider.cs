namespace KM.POD.Data.Providers
{
    public interface IConnectionProvider
    {
        System.Data.SqlClient.SqlConnection GetConnection();
    }
}

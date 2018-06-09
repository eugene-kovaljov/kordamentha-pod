using System.Threading.Tasks;

namespace KM.POD.WebSPA.Server.SignalR
{
    public interface ISignalRHub
    {
        Task Send(string data);
    }
}
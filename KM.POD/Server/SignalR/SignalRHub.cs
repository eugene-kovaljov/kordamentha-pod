using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace KM.POD.WebSPA.Server.SignalR
{
    public class SignalRHub : Hub, ISignalRHub
    {
        public Task Send(string data)
        {
            return Clients.All.SendAsync("Send", data);
        }
    }
}
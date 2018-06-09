using System.Threading.Tasks;

namespace KM.POD.Services
{
    public interface ISMSService
    {
        Task SendVerificationCode(string phoneNumber, string code);
    }
}

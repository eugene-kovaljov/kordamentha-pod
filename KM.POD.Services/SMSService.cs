using System;
using System.Threading.Tasks;

namespace KM.POD.Services
{
    public class SMSService : ISMSService
    {
        public Task SendVerificationCode(string phoneNumber, string code)
        {
            if (string.IsNullOrWhiteSpace(phoneNumber))
                throw new ArgumentNullException(nameof(phoneNumber));
            if (string.IsNullOrWhiteSpace(code))
                throw new ArgumentNullException(nameof(code));

            // TODO: complete external SMS service logic
            return Task.FromResult(0);
        }
    }
}

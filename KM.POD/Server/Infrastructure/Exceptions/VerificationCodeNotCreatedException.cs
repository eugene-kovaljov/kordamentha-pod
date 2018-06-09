namespace KM.POD.WebSPA.Server.Infrastructure.Exceptions
{
    public class VerificationCodeNotCreatedException : PodDomainException
    {
        public VerificationCodeNotCreatedException(string message) : base(message)
        {
        }
    }
}

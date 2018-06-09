namespace KM.POD.WebSPA.Server.Infrastructure.Exceptions
{
    public class PasswordChangeTokenNotCreatedException : PodDomainException
    {
        public PasswordChangeTokenNotCreatedException(string message) : base(message)
        {
        }
    }
}

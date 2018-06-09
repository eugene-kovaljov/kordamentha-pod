using System;

namespace KM.POD.WebSPA.Server.Infrastructure.Exceptions
{
    [Serializable]
    public class PodDomainException : Exception
    {
        public PodDomainException() : this("")
        {
        }

        public PodDomainException(string message) : base(message)
        {
        }
    }
}

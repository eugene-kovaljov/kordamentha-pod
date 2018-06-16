using System;

namespace KM.POD.WebSPA.Server.Infrastructure.Exceptions
{
    public abstract class PodDomainException : Exception
    {
        public PodDomainException() : this("")
        {
        }

        public PodDomainException(string message) : base(message)
        {
        }
    }
}

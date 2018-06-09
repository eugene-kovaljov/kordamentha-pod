using System;

namespace KM.POD.Identity.Exceptions
{
    public class InvalidTokenException : Exception
    {
        public InvalidTokenException() : this("")
        {
        }

        public InvalidTokenException(string message) : base(message)
        {
        }
    }
}

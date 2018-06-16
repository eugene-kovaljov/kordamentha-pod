using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace KM.POD.WebSPA.Server.Infrastructure.Attributes
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Parameter, AllowMultiple = false, Inherited = true)]
    public class RequiredGuidAttribute: ValidationAttribute
    {
        private const string GuidFormatErrorMessage = "Guid '{0}' not allowed";

        public RequiredGuidAttribute() : base(GuidFormatErrorMessage)
        {
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var input = Convert.ToString(value, CultureInfo.CurrentCulture);
            if (string.IsNullOrWhiteSpace(input))
            {
                return null;
            }

            Guid guid;
            if (!Guid.TryParse(input, out guid) || guid.Equals(Guid.Empty))
            {
                return new ValidationResult($"{FormatErrorMessage(validationContext.DisplayName)}:{value}");
            }

            return null;
        }
    }
}

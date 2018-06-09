import { FormControl, ValidationErrors } from '@angular/forms';

export const phoneMask = ['+', '6', '1', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

const specialCharacters = /\!|\"|\#|\$|\%|\&|\'|\(|\)|\*|\+|\,|\-|\.|\/|\:|\;|\<|\=|\>|\?|\@|\[|\]|\^|\_|\`|\{|\||\}|\~/;

export function passwordValidator({ value }: FormControl): ValidationErrors {
  const hasNumber = /[0-9]/.test(value);
  const hasCapitalLetter = /[A-Z]/.test(value);
  const hasLowercaseLetter = /[a-z]/.test(value);
  const isLengthValid = value ? value.length > 7 : false;
  const specialCharacter = specialCharacters.test(value);
  const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid && specialCharacter;
  if (!passwordValid) {
    return { invalidPassword: 'error message' };
  }
  return null;
}

export function emailValidator({ value }: FormControl): ValidationErrors {
  const email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(value);
  if (!email) {
    return { invalidEmail: 'error message' };
  }
  return null;
}
export interface RegistrationStep {
  nextStep(): void;
  previousStep(): void;
}

export interface AccountData {
  email: string;
  phone: string;
  code: string;
  passwordToken: string;
}

export interface PhoneVerificationCode {
  code: string;
}

export interface PhoneVerificationToken {
  token: string;
}

export interface PasswordSetup {
  password: string;
  confirmPassword: string;
}

export interface PasswordSetupPayload extends PasswordSetup, AccountData {}

export interface PasswordSetupResponse {
  email: string;
  token: string;
}

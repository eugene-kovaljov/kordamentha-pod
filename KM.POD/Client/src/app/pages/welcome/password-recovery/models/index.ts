export interface PasswordRecoveryEmailPayload {
  email: string;
}

export interface ChangePasswordToken {
  token: string;
}

export interface ChangePasswordPayload {
  email: string;
  changePasswordToken: string;
  password: string;
  confirmPassword: string;
}

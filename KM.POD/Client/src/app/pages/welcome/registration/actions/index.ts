import { Action } from '@ngrx/store';
import { AccountData, PasswordSetup, PasswordSetupPayload } from '../models';

export enum AccountCreationActionType {
  MoveToTheStep = 'Move to the step',
  SaveAccountData = 'Save Account Data',
  CreateAccount = 'Create Account',
  AccountCreated = 'Account Created',
  AccountCreateFailed = 'Account Create Failed',
  ResendVerificationCode = 'Resend Verification Code',
  VerificationCodeUpdated = 'Verification Code Updated',
  ConfirmPhone = 'Confirm Phone',
  PhoneConfirmed = 'Phone Confirmed',
  SetupPassword = 'Setup Password',
  PasswordSetupSuccess = 'Password Setup Success'
}

export enum RegistrationStepTypes {
  Register = 0,
  CodeVerification = 1,
  Password = 2
}

export class MoveToTheStep implements Action {
  readonly type = AccountCreationActionType.MoveToTheStep;

  constructor(public payload: RegistrationStepTypes) {}
}

export class SaveAccountData implements Action {
  readonly type = AccountCreationActionType.SaveAccountData;

  constructor(public payload: AccountData) {}
}

export class CreateAccount implements Action {
  readonly type = AccountCreationActionType.CreateAccount;

  constructor(public payload: AccountData) {}
}

export class AccountCreated implements Action {
  readonly type = AccountCreationActionType.AccountCreated;

  constructor(public payload: AccountData) {}
}

export class AccountCreateFailed implements Action {
  readonly type = AccountCreationActionType.AccountCreateFailed;

  constructor(public payload: any) {}
}

export class ResendVerificationCode implements Action {
  readonly type = AccountCreationActionType.ResendVerificationCode;

  constructor() {}
}

export class VerificationCodeUpdated implements Action {
  readonly type = AccountCreationActionType.VerificationCodeUpdated;

  constructor(public payload: string) {}
}

export class ConfirmPhone implements Action {
  readonly type = AccountCreationActionType.ConfirmPhone;

  constructor(public payload: any) {}
}

export class PhoneConfirmed implements Action {
  readonly type = AccountCreationActionType.PhoneConfirmed;

  constructor(public payload: any) {}
}

export class SetupPassword implements Action {
  readonly type = AccountCreationActionType.SetupPassword;

  constructor(public payload: PasswordSetupPayload) {}
}

export class PasswordSetupSuccess implements Action {
  readonly type = AccountCreationActionType.PasswordSetupSuccess;

  constructor(public payload: string) {}
}

export type AccountCreationActions =
  | MoveToTheStep
  | SaveAccountData
  | CreateAccount
  | AccountCreated
  | ResendVerificationCode
  | VerificationCodeUpdated
  | PhoneConfirmed
  | ConfirmPhone;

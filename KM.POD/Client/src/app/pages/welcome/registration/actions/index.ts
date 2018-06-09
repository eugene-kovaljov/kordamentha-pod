import { Action } from '@ngrx/store';

export enum AccountCreationActionType {
  MoveToTheStep = 'Move to the step',
  SaveTelephone = 'Save telephone'
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

export class SaveTelephone implements Action {
  readonly type = AccountCreationActionType.SaveTelephone;

  constructor(public payload: string) {}
}

export type AccountCreationActions = MoveToTheStep | SaveTelephone;

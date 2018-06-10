import { Action } from '@ngrx/store';

export enum AccountSignInActionType {
  SignIn = 'Sign In',
  SignInSuccess = 'Sign In Success',
  SignInFailed = 'Sign In Failed'
}

export class SignIn implements Action {
  readonly type = AccountSignInActionType.SignIn;

  constructor(public payload: any) {}
}

export class SignInSuccess implements Action {
  readonly type = AccountSignInActionType.SignInSuccess;

  constructor(public payload: any) {}
}

export class SignInFailed implements Action {
  readonly type = AccountSignInActionType.SignInFailed;

  constructor(public payload: any) {}
}

export type AccountSignInActions = SignIn | SignInSuccess | SignInFailed;

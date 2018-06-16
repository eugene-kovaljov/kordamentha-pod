import { Action } from '@ngrx/store';
import { ClientAccountData } from '../models/account.models';

export enum AccountStoreActionTypes {
  GetClientAccountData = 'Get Client Account Data',
  GetClientAccountDataSuccess = 'Get Client Account Data Success',
  GetClientAccountDataFailure = 'Get Client Account Data Failure',
  DeleteClientAccount = 'Delete Client Account',
  DeleteClientAccountSuccess = 'Delete Client Account Success',
  DeleteClientAccountFailure = 'Delete Client Account Failure',
  SaveClientAccount = 'Save Client Account',
  SaveClientAccountSuccess = 'Save Client Account Success',
  SaveClientAccountFailure = 'Save Client Account Failure'
}

export class GetClientAccountData implements Action {
  readonly type = AccountStoreActionTypes.GetClientAccountData;

  constructor(public payload: any) {}
}

export class GetClientAccountDataSuccess implements Action {
  readonly type = AccountStoreActionTypes.GetClientAccountDataSuccess;

  constructor(public payload: ClientAccountData) {}
}

export class GetClientAccountDataFailure implements Action {
  readonly type = AccountStoreActionTypes.GetClientAccountDataFailure;

  constructor(public payload: any) {}
}

export class DeleteClientAccount implements Action {
  readonly type = AccountStoreActionTypes.DeleteClientAccount;

  constructor(public payload: any) {}
}

export class DeleteClientAccountSuccess implements Action {
  readonly type = AccountStoreActionTypes.DeleteClientAccountSuccess;

  constructor(public payload: any) {}
}

export class DeleteClientAccountFailure implements Action {
  readonly type = AccountStoreActionTypes.DeleteClientAccountFailure;

  constructor(public payload: any) {}
}

export class SaveClientAccount implements Action {
  readonly type = AccountStoreActionTypes.SaveClientAccount;

  constructor(public payload: ClientAccountData) {}
}

export class SaveClientAccountSuccess implements Action {
  readonly type = AccountStoreActionTypes.SaveClientAccountSuccess;

  constructor(public payload: ClientAccountData) {}
}

export class SaveClientAccountFailure implements Action {
  readonly type = AccountStoreActionTypes.SaveClientAccountFailure;

  constructor(public payload: any) {}
}

export type AccountActions =
  | GetClientAccountData
  | GetClientAccountDataSuccess
  | GetClientAccountDataFailure
  | DeleteClientAccount
  | DeleteClientAccountSuccess
  | DeleteClientAccountFailure
  | SaveClientAccount
  | SaveClientAccountSuccess
  | SaveClientAccountFailure;

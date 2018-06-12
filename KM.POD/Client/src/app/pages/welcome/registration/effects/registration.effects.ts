import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RegistrationService } from '../services/registration.service';
import { Observable } from 'rxjs/Observable';
import { Action, select, Store } from '@ngrx/store';
import {
  AccountCreated,
  AccountCreateFailed,
  AccountCreationActionType,
  ConfirmPhone,
  CreateAccount,
  PasswordSetupSuccess,
  PhoneConfirmed,
  ResendVerificationCode,
  SetupPassword,
  VerificationCodeUpdated,
  SaveAccountData
} from '../actions';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { AccountData, PasswordSetupPayload, PhoneVerificationCode, PhoneVerificationToken } from '../models';
import { getAccountData, registerState } from '../selectors';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RegistrationEffects {
  @Effect() public accountCreating: Observable<Action>;
  @Effect() public confirmationCodeResending: Observable<Action>;
  @Effect() public phoneConfirming: Observable<Action>;
  @Effect() public passwordSetup: Observable<Action>;

  constructor(private actions$: Actions, private store: Store<any>, private registrationService: RegistrationService) {
    this.initEffects();
  }

  public initEffects() {
    this.accountCreating = this.actions$.pipe(
      ofType<CreateAccount>(AccountCreationActionType.CreateAccount),
      map(action => action.payload),
      switchMap((accountData: AccountData) => {
        return this.registrationService.createAccount(accountData).pipe(
          map((data: PhoneVerificationCode) => new AccountCreated({ ...accountData, code: data.code })),
          catchError(error => of(new AccountCreateFailed(error)))
        );
      })
    );

    this.confirmationCodeResending = this.actions$.pipe(
      ofType<ResendVerificationCode>(AccountCreationActionType.ResendVerificationCode),
      withLatestFrom(this.store.pipe(select(getAccountData))),
      map(([action, accountData]) => accountData),
      switchMap((accountData: AccountData) => {
        return this.registrationService
          .resendVerificationCode(accountData)
          .pipe(map((data: PhoneVerificationCode) => new VerificationCodeUpdated(data.code)));
      })
    );

    this.phoneConfirming = this.actions$.pipe(
      ofType<ConfirmPhone>(AccountCreationActionType.ConfirmPhone),
      map(action => action.payload),
      withLatestFrom(this.store.pipe(select(getAccountData))),
      map(([payload, accountData]) => ({ ...accountData, code: payload })),
      switchMap((accountData: AccountData) => {
        return this.registrationService
          .confirmPhone(accountData)
          .pipe(
            map((data: PhoneVerificationToken) => new PhoneConfirmed(data))
          )
      })
    );

    this.passwordSetup = this.actions$.pipe(
      ofType<SetupPassword>(AccountCreationActionType.SetupPassword),
      map(action => action.payload),
      withLatestFrom(this.store.pipe(select(registerState))),
      map(([payload, state]) => ({
        ...state.accountCreation.accountData,
        passwordToken: state.accountCreation.passwordToken,
        ...payload
      })),
      switchMap((payload: PasswordSetupPayload) => {
        return this.registrationService
          .setPassword(payload)
          .pipe(map((data: PhoneVerificationToken) => new PasswordSetupSuccess(data.token)));
      })
    );
  }
}

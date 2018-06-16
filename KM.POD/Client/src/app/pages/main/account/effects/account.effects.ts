import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { share } from 'rxjs/operators/share';
import { ClientAccountService } from '../services/account.service';
import { ClientAccountData } from '../models/account.models';
import {
  AccountStoreActionTypes,
  DeleteClientAccount,
  DeleteClientAccountFailure,
  DeleteClientAccountSuccess,
  GetClientAccountData,
  GetClientAccountDataFailure,
  GetClientAccountDataSuccess,
  SaveClientAccount,
  SaveClientAccountFailure,
  SaveClientAccountSuccess
} from '../actions/account.actions';

@Injectable()
export class ClientAccountEffects {
  @Effect() public accountGetting: Observable<Action>;
  @Effect() public accountDeleting: Observable<Action>;
  @Effect() public accountUpdating: Observable<Action>;

  constructor(private actions$: Actions, private store: Store<any>, private accountService: ClientAccountService) {
    this.initEffects();
  }

  public initEffects() {
    this.accountGetting = this.actions$.pipe(
      ofType<GetClientAccountData>(AccountStoreActionTypes.GetClientAccountData),
      map(action => action.payload),
      switchMap((payload: any) => {
        return this.accountService.getAccountData(null).pipe(
          map((data: ClientAccountData) => new GetClientAccountDataSuccess(data)),
          catchError(error => of(new GetClientAccountDataFailure(error)))
        );
      }),
      share()
    );

    this.accountDeleting = this.actions$.pipe(
      ofType<DeleteClientAccount>(AccountStoreActionTypes.DeleteClientAccount),
      map(action => action.payload),
      switchMap((payload: any) => {
        return this.accountService.deleteAccount(payload).pipe(
          map((data: any) => new DeleteClientAccountSuccess(data)),
          catchError(error => of(new DeleteClientAccountFailure(error)))
        );
      }),
      share()
    );

    this.accountUpdating = this.actions$.pipe(
      ofType<SaveClientAccount>(AccountStoreActionTypes.SaveClientAccount),
      map(action => action.payload),
      switchMap((payload: ClientAccountData) => {
        return this.accountService.updateAccount(payload).pipe(
          map((data: ClientAccountData) => new SaveClientAccountSuccess(data)),
          catchError(error => of(new SaveClientAccountFailure(error)))
        );
      }),
      share()
    );
  }
}

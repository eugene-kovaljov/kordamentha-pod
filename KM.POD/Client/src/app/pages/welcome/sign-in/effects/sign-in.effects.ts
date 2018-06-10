import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { SignInService } from '../services/sign-in.service';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { AccountSignInActionType, SignIn, SignInFailed, SignInSuccess } from '../actions';

@Injectable()
export class SignInEffects {
  @Effect() public signingIn: Observable<Action>;

  constructor(private actions$: Actions, private signInService: SignInService) {
    this.initEffects();
  }

  public initEffects(): void {
    this.signingIn = this.actions$.pipe(
      ofType<SignIn>(AccountSignInActionType.SignIn),
      map(action => action.payload),
      switchMap((payload: any) => {
        return this.signInService
          .signIn(payload)
          .pipe(map((data: any) => new SignInSuccess(payload), catchError(error => of(new SignInFailed(error)))));
      })
    );
  }
}

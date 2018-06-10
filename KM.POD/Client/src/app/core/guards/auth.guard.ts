import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getIsLoggedInState } from '../../pages/welcome/sign-in/selectors';
import { of } from 'rxjs/observable/of';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { map } from 'rxjs/operators/map';
// import { routes } from '../../shared/constants/urls';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return of({}).pipe(
      withLatestFrom(this.store.pipe(select(getIsLoggedInState))),
      map(([data, isLoggedIn]) => {
        /*if (!isLoggedIn) {
          this.router.navigate([routes.SIGN_IN.fullPath]);
        }

        return isLoggedIn;*/
        return true;
      })
    );
  }
}

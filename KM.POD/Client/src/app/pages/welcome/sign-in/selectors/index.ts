import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState } from '../reducers';

export interface AuthenticationState {
  account: AccountState;
}

export const featureSelector = createFeatureSelector<AuthenticationState>('account');
export const getIsLoggedInState = createSelector(featureSelector, state => {
  return state.account.isLoggedIn;
});

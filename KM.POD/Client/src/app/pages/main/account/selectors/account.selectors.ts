import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientAccountState } from '../reducers/account.reducers';

export interface ClientAccountStore {
  clientAccount: ClientAccountState;
}

export const featureSelector = createFeatureSelector<ClientAccountStore>('clientAccount');
export const clientAccountState = createSelector(featureSelector, state => state);
export const clientAccountData = createSelector(featureSelector, state => state.clientAccount.clientAccountData);

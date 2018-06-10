import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountCreationState } from '../reducers';

export interface RegisterState {
  accountCreation: AccountCreationState;
}

export const featureSelector = createFeatureSelector<RegisterState>('register');
export const registerState = createSelector(featureSelector, state => state);
export const getAccountCreation = createSelector(featureSelector, state => state.accountCreation);
export const getCurrentStep = createSelector(getAccountCreation, state => state.currentStep);
export const getAccountData = createSelector(getAccountCreation, state => state.accountData);

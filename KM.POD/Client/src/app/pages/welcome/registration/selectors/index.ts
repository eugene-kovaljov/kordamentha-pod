import { createFeatureSelector, createSelector } from '@ngrx/store';
import { accountCreationReducer, AccountCreationState } from '../reducers';

export interface RegisterState {
  accountCreation: AccountCreationState;
}

export const featureSelector = createFeatureSelector<RegisterState>('register');
export const getAccountCreation = createSelector(featureSelector, state => state.accountCreation);
export const getCurrentStep = createSelector(getAccountCreation, state => state.currentStep);

export const getTelephone = createSelector(getAccountCreation, state => state.phone);

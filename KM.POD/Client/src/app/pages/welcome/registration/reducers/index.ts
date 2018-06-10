import { RegisterComponent } from '../components/register/register.component';
import { AccountCreationActions, AccountCreationActionType } from '../actions';
import { Component, Type } from '@angular/core';
import { AccountData, RegistrationStep } from '../models';
import { PasswordSetupComponent } from '../components/password-setup/password-setup.component';
import { CodeVerificationComponent } from '../components/code-verification/code-verification.component';

export interface AccountCreationState {
  currentStep: Type<Component & RegistrationStep>;
  accountData: AccountData;
  code: string;
  passwordToken: string;
}

export const initialState: AccountCreationState = {
  currentStep: null,
  accountData: {} as AccountData,
  code: '',
  passwordToken: ''
};

export const steps: Type<Component & RegistrationStep>[] = [
  RegisterComponent,
  CodeVerificationComponent,
  PasswordSetupComponent
];

export function accountCreationReducer(state = initialState, action: AccountCreationActions): AccountCreationState {
  const { payload, type } = action as any;
  switch (type) {
    case AccountCreationActionType.MoveToTheStep: {
      return { ...state, currentStep: steps[payload] };
    }
    case AccountCreationActionType.SaveAccountData: {
      return { ...state, accountData: payload };
    }
    case AccountCreationActionType.AccountCreated: {
      return { ...state, accountData: payload };
    }
    case AccountCreationActionType.VerificationCodeUpdated: {
      const accountData = state.accountData;
      return { ...state, code: payload };
    }
    case AccountCreationActionType.PhoneConfirmed: {
      const accountData = state.accountData;
      return { ...state, passwordToken: payload };
    }
    default: {
      return state;
    }
  }
}

export const registerReducers = {
  accountCreation: accountCreationReducer
};

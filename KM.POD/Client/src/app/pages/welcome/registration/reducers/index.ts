import { RegisterComponent } from '../components/register/register.component';
import { AccountCreationActions, AccountCreationActionType } from '../actions';
import { Component, Type } from '@angular/core';
import { RegistrationStep } from '../models';
import { PasswordSetupComponent } from '../components/password-setup/password-setup.component';
import { CodeVerificationComponent } from '../components/code-verification/code-verification.component';

export interface AccountCreationState {
  currentStep: Type<Component & RegistrationStep>;
  phone: string;
}

export const initialState: AccountCreationState = {
  currentStep: RegisterComponent,
  phone: ''
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
    case AccountCreationActionType.SaveTelephone: {
      return { ...state, phone: payload };
    }
    default: {
      return state;
    }
  }
}

export const registerReducers = {
  accountCreation: accountCreationReducer
};

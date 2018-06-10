import { AccountSignInActions, AccountSignInActionType } from '../actions';

export interface AccountState {
  account: any;
  token: string;
  isLoggedIn: boolean;
}

export const initialState = {
  account: null,
  token: '',
  isLoggedIn: false
};

export function accountReducer(state = initialState, action: AccountSignInActions): AccountState {
  const { payload, type } = action as any;
  switch (type) {
    case AccountSignInActionType.SignInSuccess: {
      return { ...state, account: payload, isLoggedIn: true };
    }
    case AccountSignInActionType.SignInFailed: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}

export const signInReducers = {
  account: accountReducer
};

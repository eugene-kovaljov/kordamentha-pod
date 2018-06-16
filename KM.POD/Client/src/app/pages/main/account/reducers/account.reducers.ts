import { ClientAccountData } from '../models/account.models';
import { AccountActions, AccountStoreActionTypes } from '../actions/account.actions';

export interface ClientAccountState {
  clientAccountData: ClientAccountData;
}

export const initialState = {
  clientAccountData: {} as ClientAccountData
};

export function clientAccountReducer(state = initialState, action: AccountActions): ClientAccountState {
  const { payload, type } = action as any;
  switch (type) {
    case AccountStoreActionTypes.GetClientAccountDataSuccess: {
      return { ...state, clientAccountData: payload };
    }
    case AccountStoreActionTypes.SaveClientAccountSuccess: {
      return { ...state, clientAccountData: payload };
    }
    case AccountStoreActionTypes.DeleteClientAccountSuccess: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const clientAccountReducers = {
  clientAccount: clientAccountReducer
};

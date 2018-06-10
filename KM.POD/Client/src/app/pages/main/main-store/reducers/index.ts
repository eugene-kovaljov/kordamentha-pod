import { IBreadcrumb } from '../../../../shared/components/breadcrumb/service/breadcrumb.service';
import { MainStoreActions, MainStoreActionTypes } from '../actions';

export interface MainState {
  breadcrumbs: IBreadcrumb[];
  pageTitle: string;
}

export const initialState = {
  breadcrumbs: [],
  pageTitle: ''
};

export function mainReducer(state = initialState, action: MainStoreActions): MainState {
  const { payload, type } = action as any;
  switch (type) {
    case MainStoreActionTypes.SetBreadcrumbs: {
      return { ...state, breadcrumbs: [...payload] };
    }
    case MainStoreActionTypes.SetPageTitle: {
      return { ...state, pageTitle: payload };
    }
    default: {
      return state;
    }
  }
}

export const mainReducers = {
  mainState: mainReducer
};

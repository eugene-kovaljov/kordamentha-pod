import { Component, Type } from '@angular/core';
import { SidebarActions, SidebarActionTypes } from '../actions/sidebar.actions';

export interface SidebarState {
  sidebarComponent: Type<Component>;
}

export const initialState = {
  sidebarComponent: null
};

export function sidebarReducer(state = initialState, action: SidebarActions): SidebarState {
  const { payload, type } = action as any;
  switch (type) {
    case SidebarActionTypes.ShowSidebar: {
      return { ...state, sidebarComponent: payload };
    }
    case SidebarActionTypes.HideSidebar: {
      return { ...state, sidebarComponent: null };
    }
    default: {
      return state;
    }
  }
}

export const sidebarReducers = {
  sidebar: sidebarReducer
};

import { Action } from '@ngrx/store';
import { Component, Type } from '@angular/core';

export enum SidebarActionTypes {
  ShowSidebar = 'Show Sidebar',
  HideSidebar = 'Hide Sidebar'
}

export class ShowSidebar implements Action {
  readonly type = SidebarActionTypes.ShowSidebar;

  constructor(public payload: Type<Component>) {}
}

export class HideSidebar implements Action {
  readonly type = SidebarActionTypes.HideSidebar;
}

export type SidebarActions = ShowSidebar | HideSidebar;

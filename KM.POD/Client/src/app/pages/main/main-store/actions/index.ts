import { Action } from '@ngrx/store';
import { IBreadcrumb } from '../../../../shared/components/breadcrumb/service/breadcrumb.service';

export enum MainStoreActionTypes {
  SetPageTitle = 'Set Page Title',
  SetBreadcrumbs = 'Set Breadcrumbs'
}

export class SetPageTitle implements Action {
  readonly type = MainStoreActionTypes.SetPageTitle;

  constructor(public payload: string) {}
}

export class SetBreadcrumbs implements Action {
  readonly type = MainStoreActionTypes.SetBreadcrumbs;

  constructor(public payload: IBreadcrumb[]) {}
}

export type MainStoreActions = SetPageTitle | SetBreadcrumbs;

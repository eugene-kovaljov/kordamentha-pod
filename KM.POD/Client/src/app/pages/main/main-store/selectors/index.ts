import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainState } from '../reducers';

export interface MainStore {
  mainState: MainState;
}

export const featureSelector = createFeatureSelector<MainStore>('main');
export const mainState = createSelector(featureSelector, state => state);
export const getBreadcrumbs = createSelector(featureSelector, state => state.mainState.breadcrumbs);
export const getPageTitle = createSelector(featureSelector, state => state.mainState.pageTitle);

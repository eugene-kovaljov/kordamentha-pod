import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SidebarState } from '../reducers/sidebar.reducers';

export interface SidebarStore {
  sidebar: SidebarState;
}

export const featureSelector = createFeatureSelector<SidebarStore>('sidebar');
export const getSidebarComponent = createSelector(featureSelector, state => {
  return state.sidebar.sidebarComponent;
});

export const sidebarShown = createSelector(getSidebarComponent, sidebarComponent => {
  return sidebarComponent !== null;
});

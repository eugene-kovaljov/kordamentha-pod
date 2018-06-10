import { Routes } from '@angular/router';
import { routes } from '../../shared/constants/urls';
import { MainComponent } from './main.component';

export const mainPageRoutes: Routes = [
  {
    path: routes.MAIN.routerPath,
    component: MainComponent,
    children: []
  }
];

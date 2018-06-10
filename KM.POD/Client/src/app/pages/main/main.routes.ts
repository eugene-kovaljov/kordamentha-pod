import { Routes } from '@angular/router';
import { routes } from '../../shared/constants/urls';
import { MainComponent } from './main.component';
import { AccountComponent } from './account/account.component';

export const mainPageRoutes: Routes = [
  {
    path: routes.MAIN.routerPath,
    component: MainComponent,
    data: {
      breadcrumbs: 'Home'
    },
    children: [
      {
        path: routes.ACCOUNT.routerPath,
        component: AccountComponent,
        data: {
          breadcrumbs: 'Account'
        }
      }
    ]
  }
];

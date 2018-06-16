import { Routes } from '@angular/router';
import { routes } from '../../shared/constants/urls';
import { MainComponent } from './main.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { DeactivateGuard } from '../../core/guards/deactivate.guard';

export const mainPageRoutes: Routes = [
  {
    path: routes.MAIN.routerPath,
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainPageComponent,
        data: {
          breadcrumbs: 'Home'
        }
      },
      {
        path: routes.ACCOUNT.routerPath,
        component: AccountComponent,
        data: {
          breadcrumbs: 'Account'
        },
        canDeactivate: [DeactivateGuard]
      }
    ]
  }
];

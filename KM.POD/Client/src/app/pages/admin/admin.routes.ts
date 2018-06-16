import { Routes } from '@angular/router';
import { routes } from '../../shared/constants/urls';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const adminPageRoutes: Routes = [
  {
    path: routes.ADMIN.routerPath,
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        data: {
          breadcrumbs: 'Home'
        }
      }
    ]
  }
];

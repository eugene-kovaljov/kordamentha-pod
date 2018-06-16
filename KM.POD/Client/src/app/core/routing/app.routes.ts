import { Routes } from '@angular/router';
import { welcomePageRoutes } from '../../pages/welcome/welcome.routes';
import { mainPageRoutes } from '../../pages/main/main.routes';
import { adminPageRoutes } from '../../pages/admin/admin.routes';

export const appRoutes: Routes = [
  ...welcomePageRoutes,
  ...mainPageRoutes,
  ...adminPageRoutes,
  { path: '**', redirectTo: 'welcome' }
];

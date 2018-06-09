import { Routes } from '@angular/router';
import { welcomePageRoutes } from '../../pages/welcome/welcome.routes';

export const appRoutes: Routes = [...welcomePageRoutes, { path: '**', redirectTo: 'welcome' }];

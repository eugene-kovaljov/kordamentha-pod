import { Routes } from '@angular/router';
import { welcomePageRoutes } from '../../pages/welcome/welcome.routes';
import { mainPageRoutes } from '../../pages/main/main.routes';

export const appRoutes: Routes = [...welcomePageRoutes, ...mainPageRoutes, { path: '**', redirectTo: 'welcome' }];

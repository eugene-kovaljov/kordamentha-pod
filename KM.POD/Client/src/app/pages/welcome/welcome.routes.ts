import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';

export const welcomePageRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        component: WelcomeSidebarComponent
      }
    ]
  }
];

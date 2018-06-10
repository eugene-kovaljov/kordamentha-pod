import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { routes } from '../../shared/constants/urls';
import { RegistrationContainerComponent } from './registration/components/registration-container.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

export const welcomePageRoutes: Routes = [
  {
    path: routes.WELCOME.routerPath,
    component: WelcomeComponent,
    children: [
      {
        path: '',
        component: WelcomeSidebarComponent
      },
      {
        path: routes.SIGN_IN.routerPath,
        component: SignInComponent
      },
      {
        path: routes.REGISTER.routerPath,
        component: RegistrationContainerComponent
      },
      {
        path: routes.PASSWORD_RECOVERY.routerPath,
        component: PasswordRecoveryComponent
      }
    ]
  }
];

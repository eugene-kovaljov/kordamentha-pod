import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatDialogModule } from '@angular/material';
import { RegistrationModule } from './registration/registration.module';
import { CoreModule } from '../../core/core.module';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  imports: [CommonModule, CoreModule, RoutingModule, RegistrationModule, SharedModule, MatDialogModule],
  declarations: [WelcomeComponent, WelcomeSidebarComponent, PasswordRecoveryComponent, SignInComponent]
})
export class WelcomeModule {}

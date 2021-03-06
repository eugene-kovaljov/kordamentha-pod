import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';
import { MatDialogModule } from '@angular/material';
import { RegistrationModule } from './registration/registration.module';
import { CoreModule } from '../../core/core.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { SignInModule } from './sign-in/sign-in.module';
import { FooterModule } from '../../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RoutingModule,
    RegistrationModule,
    PasswordRecoveryModule,
    SharedModule,
    FooterModule,
    MatDialogModule,
    SignInModule
  ],
  declarations: [WelcomeComponent, WelcomeSidebarComponent]
})
export class WelcomeModule {}

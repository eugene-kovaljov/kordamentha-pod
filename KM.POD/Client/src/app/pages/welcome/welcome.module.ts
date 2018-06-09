import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatDialogModule } from '@angular/material';
import { PrivacyPolicyComponent } from './dialogs/privacy-policy/privacy-policy.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';
import { PasswordSetupComponent } from './password-setup/password-setup.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    TextMaskModule,
    MatDialogModule
  ],
  declarations: [
    WelcomeComponent,
    WelcomeSidebarComponent,
    SignInComponent,
    RegisterComponent,
    PrivacyPolicyComponent,
    CodeVerificationComponent,
    PasswordSetupComponent
  ],
  entryComponents: [PrivacyPolicyComponent]
})
export class WelcomeModule {}

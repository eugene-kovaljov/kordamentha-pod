import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';
import { MatDialogModule } from '@angular/material';
import { RoutingModule } from '../../../core/routing/app.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { PasswordSetupComponent } from './components/password-setup/password-setup.component';
import { CoreModule } from '../../../core/core.module';
import { StoreModule } from '@ngrx/store';
import { registerReducers } from './reducers';
import { RegistrationContainerComponent } from './components/registration-container.component';
import { RegistrationService } from './services/registration.service';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationEffects } from './effects/registration.effects';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    CoreModule,
    SharedModule,
    NgSelectModule,
    TextMaskModule,
    MatDialogModule,
    StoreModule.forFeature('register', registerReducers),
    EffectsModule.forFeature([RegistrationEffects])
  ],
  declarations: [
    RegisterComponent,
    PrivacyPolicyComponent,
    CodeVerificationComponent,
    PasswordSetupComponent,
    RegistrationContainerComponent
  ],
  entryComponents: [
    PrivacyPolicyComponent,
    PasswordSetupComponent,
    CodeVerificationComponent,
    RegisterComponent,
    PrivacyPolicyComponent
  ],
  providers: [RegistrationService]
})
export class RegistrationModule {}

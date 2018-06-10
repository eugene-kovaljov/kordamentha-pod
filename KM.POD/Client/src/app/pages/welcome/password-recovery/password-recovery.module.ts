import { NgModule } from '@angular/core';
import { NewPasswordSetupComponent } from './password-setup/new-password-setup.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [NewPasswordSetupComponent, EmailVerificationComponent],
  declarations: [NewPasswordSetupComponent, PasswordRecoveryComponent, EmailVerificationComponent]
})
export class PasswordRecoveryModule {}

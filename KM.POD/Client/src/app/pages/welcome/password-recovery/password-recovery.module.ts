import { NgModule } from '@angular/core';
import { NewPasswordSetupComponent } from './components/password-setup/new-password-setup.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { PasswordRecoveryComponent } from './components/password-recovery.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { PasswordRecoveryService } from './services/password-recovery.service';

@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [NewPasswordSetupComponent, EmailVerificationComponent],
  providers: [PasswordRecoveryService],
  declarations: [NewPasswordSetupComponent, PasswordRecoveryComponent, EmailVerificationComponent]
})
export class PasswordRecoveryModule {}

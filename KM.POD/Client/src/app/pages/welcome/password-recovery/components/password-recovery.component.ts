import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PasswordRecoveryService } from '../services/password-recovery.service';
import { UnsubscribableComponent } from '../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { ChangePasswordToken } from '../models';
import { PasswordSetup } from '../../registration/models';
import { Router } from '@angular/router';
import { routes } from '../../../../shared/constants/urls';

@Component({
  selector: 'km-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryComponent extends UnsubscribableComponent {
  public showEmailInput = true;

  private email: string;
  private changePasswordToken: string;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private passwordRecoveryService: PasswordRecoveryService,
    private router: Router
  ) {
    super();
  }

  public onEmailProvided(value: string): void {
    this.email = value;
    this.passwordRecoveryService
      .sendEmail({ email: value })
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ChangePasswordToken) => {
        this.changePasswordToken = data.token;
        this.showEmailInput = false;
        this.changeDetector.markForCheck();
      });
  }

  public onEmailSpecified(value: PasswordSetup): void {
    this.passwordRecoveryService
      .changePassword({
        ...value,
        changePasswordToken: this.changePasswordToken,
        email: this.email
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ChangePasswordToken) => {
        this.router.navigate([routes.SIGN_IN.fullPath]);
      });
  }
}

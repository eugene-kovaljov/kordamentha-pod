import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../../../../shared/validators';
import { Router } from '@angular/router';
import { routes } from '../../../../shared/constants/urls';

@Component({
  selector: 'km-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailVerificationComponent {
  public email: FormControl = new FormControl('', [Validators.required, emailValidator]);

  @Output() public onEmailProvided: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  public resetPassword() {
    this.onEmailProvided.emit(this.email.value);
  }

  public isControlInvalid(): boolean {
    return this.email.invalid && this.email.touched;
  }

  public cancel() {
    this.router.navigate([routes.SIGN_IN.fullPath]);
  }
}

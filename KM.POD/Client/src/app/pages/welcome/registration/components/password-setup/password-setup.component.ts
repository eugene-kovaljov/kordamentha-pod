import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator, passwordValidator } from '../../../../../shared/validators';
import { RegistrationStep } from '../../models';
import { Router } from '@angular/router';
import { routes } from '../../../../../shared/constants/urls';

@Component({
  selector: 'km-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordSetupComponent implements OnInit, RegistrationStep {
  @Input() data: any;

  public passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public ngOnInit(): void {
    this.initPasswordForm();
  }

  public nextStep(): void {
    this.router.navigate([routes.SIGN_IN.fullPath]);
  }

  public previousStep(): void {
    this.router.navigate([routes.WELCOME.fullPath]);
  }

  public initPasswordForm(): void {
    this.passwordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required, passwordValidator]]
      },
      {
        validator: passwordMatchValidator
      }
    );
  }

  public addAndSignIn() {
    this.nextStep();
  }

  public cancel() {
    this.previousStep();
  }
}

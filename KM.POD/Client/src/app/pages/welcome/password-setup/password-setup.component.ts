import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../shared/validators';

@Component({
  selector: 'km-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordSetupComponent implements OnInit {
  @Input() data: any;

  public passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initPasswordForm();
  }

  public initPasswordForm(): void {
    this.passwordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required, passwordValidator]]
      },
      {
        validator: this.isPasswordsMatch
      }
    );
  }

  public addAndSignIn() {}

  public cancel() {}

  private isPasswordsMatch(abstractControl: AbstractControl): boolean {
    const password = abstractControl.get('password').value; // to get value in input tag
    const confirmPassword = abstractControl.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({ matchPassword: true });
    } else {
      return null;
    }
  }
}

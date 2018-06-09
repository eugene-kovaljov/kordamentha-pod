import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../../../shared/constants/urls';
import { emailValidator } from '../../../shared/validators';

@Component({
  selector: 'km-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]],
      rememberMe: ''
    });
  }

  public login(): void {
    /*this.spinnerService.show();
    this.accountApiService.getAuthToken(this.fillModel())
      .pipe(finalize(() => this.spinnerService.hide()))
      .subscribe((authToken: any) => {
          this.authenticationService.logIn(authToken.token);
          this.router.navigate(['mainPage']);
        },
        () => {
          // this.notificationService.error('Error', 'Error logging in');
        });*/
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.signInForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public cancel() {
    this.router.navigate([routes.WELCOME.fullPath]);
  }
}

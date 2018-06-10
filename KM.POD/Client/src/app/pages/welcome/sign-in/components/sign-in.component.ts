import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../../../../shared/constants/urls';
import { emailValidator } from '../../../../shared/validators';
import { Store } from '@ngrx/store';
import { UnsubscribableComponent } from '../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { AccountSignInActionType, SignIn } from '../actions';
import { SignInEffects } from '../effects/sign-in.effects';
import { filter } from 'rxjs/operators/filter';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'km-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends UnsubscribableComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private effects: SignInEffects
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initForm();
    this.listenToSignInEvents();
  }

  public initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]],
      rememberMe: ''
    });
  }

  public listenToSignInEvents(): void {
    this.effects.signingIn
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountSignInActionType.SignInSuccess)
      )
      .subscribe(() => {
        this.router.navigate([routes.WELCOME.fullPath]);
      });
  }

  public login(): void {
    this.store.dispatch(new SignIn(this.signInForm.getRawValue()));
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.signInForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public cancel() {
    this.router.navigate([routes.WELCOME.fullPath]);
  }
}

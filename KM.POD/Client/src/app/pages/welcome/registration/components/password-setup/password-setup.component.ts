import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator, passwordValidator } from '../../../../../shared/validators';
import { RegistrationStep } from '../../models';
import { Router } from '@angular/router';
import { routes } from '../../../../../shared/constants/urls';
import { UnsubscribableComponent } from '../../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { Store } from '@ngrx/store';
import { AccountCreationActionType, SetupPassword } from '../../actions';
import { RegistrationEffects } from '../../effects/registration.effects';
import { filter } from 'rxjs/operators/filter';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'km-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordSetupComponent extends UnsubscribableComponent implements OnInit, RegistrationStep {
  public passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private effects: RegistrationEffects
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initPasswordForm();
    this.setupPasswordListeners();
  }

  public setupPasswordListeners() {
    this.effects.passwordSetup
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountCreationActionType.PasswordSetupSuccess)
      )
      .subscribe(() => {
        this.nextStep();
      });
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
    this.store.dispatch(new SetupPassword(this.passwordForm.getRawValue()));
  }

  public cancel() {
    this.previousStep();
  }
}

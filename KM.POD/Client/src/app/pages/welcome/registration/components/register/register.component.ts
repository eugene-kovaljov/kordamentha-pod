import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, phoneMask } from '../../../../../shared/validators';
import { MatDialog } from '@angular/material';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { Router } from '@angular/router';
import { routes } from '../../../../../shared/constants/urls';
import { AlertComponent } from '../../../../../shared/components/dialogs/alert/alert.component';
import { RegistrationStep } from '../../models';
import { Store } from '@ngrx/store';
import { AccountCreationActionType, CreateAccount, MoveToTheStep, RegistrationStepTypes, SaveAccountData } from '../../actions';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { filter } from 'rxjs/operators/filter';
import { UnsubscribableComponent } from '../../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { RegistrationEffects } from '../../effects/registration.effects';

@Component({
  selector: 'km-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends UnsubscribableComponent implements OnInit, RegistrationStep {
  public registrationForm: FormGroup;
  public phoneMask = phoneMask;

  constructor(
    private store: Store<any>,
    private registrationEffects: RegistrationEffects,
    private formBuilder: FormBuilder,
    private dialogService: MatDialog,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initForm();
    this.subscribeToRegistrationEvents();
  }

  public subscribeToRegistrationEvents(): void {
    this.registrationEffects.accountCreating
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountCreationActionType.AccountCreated),
        mergeMap(() => {
          return this.dialogService
            .open(AlertComponent, {
              autoFocus: false,
              data: {
                title: 'Check your phone!',
                message: 'CodeVerification code was recent.'
              },
              panelClass: 'dialog-container'
            })
            .afterClosed();
        })
      )
      .subscribe(() => {
        this.nextStep();
      });
  }

  public nextStep(): void {
    this.store.dispatch(new MoveToTheStep(RegistrationStepTypes.CodeVerification));
  }

  public previousStep(): void {
    this.cancel();
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public initForm(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      phone: ['', [Validators.required]],
      isChosen: [false, [Validators.requiredTrue]]
    });
  }

  public cancel() {
    this.router.navigate([routes.WELCOME.fullPath]);
  }

  public showTermsOfUse(): void {
    this.dialogService
      .open(PrivacyPolicyComponent, {
        autoFocus: false,
        data: {
          title: 'Personal data politics',
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites."
        },
        panelClass: 'privacy-politics-dialog-container'
      })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.registrationForm.get('isChosen').setValue(result);
          this.registrationForm.updateValueAndValidity();
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  public showVerificationScreen(): void {
    const formValue = { 
      email: this.registrationForm.get('email').value,
      phone: this.registrationForm.get('phone').value,
      code: '',
      passwordToken: ''
    };
    this.store.dispatch(new SaveAccountData(formValue));
    this.store.dispatch(new CreateAccount(formValue));
  }
}

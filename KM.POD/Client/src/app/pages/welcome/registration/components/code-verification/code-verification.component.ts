import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountData, RegistrationStep } from '../../models';
import { select, Store } from '@ngrx/store';
import {
  AccountCreationActionType,
  ConfirmPhone,
  MoveToTheStep,
  RegistrationStepTypes,
  ResendVerificationCode,
  SaveAccountData
} from '../../actions';
import { UnsubscribableComponent } from '../../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { getAccountData } from '../../selectors';
import { AlertComponent } from '../../../../../shared/components/dialogs/alert/alert.component';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { MatDialog } from '@angular/material';
import { RegistrationEffects } from '../../effects/registration.effects';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'km-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeVerificationComponent extends UnsubscribableComponent implements OnInit, RegistrationStep {
  public verificationCode = new FormControl('');
  public accountData: AccountData = {} as any;

  constructor(
    private store: Store<any>,
    private effects: RegistrationEffects,
    private dialogService: MatDialog,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(getAccountData),
        takeUntil(this.destroy$)
      )
      .subscribe((accountData: AccountData) => {
        this.accountData = accountData;
        this.changeDetector.detectChanges();
      });

    this.initRegistrationEventListeners();
  }

  public initRegistrationEventListeners(): void {
    this.effects.confirmationCodeResending
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountCreationActionType.VerificationCodeUpdated),
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
      .subscribe(() => {});

    this.effects.phoneConfirming
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountCreationActionType.PhoneConfirmed)
      )
      .subscribe((data: any) => {
        this.nextStep();
      });
  }

  public nextStep(): void {
    this.store.dispatch(new MoveToTheStep(RegistrationStepTypes.Password));
  }

  public previousStep(): void {
    this.store.dispatch(new MoveToTheStep(RegistrationStepTypes.Register));
  }

  public resendCode() {
    this.store.dispatch(new ResendVerificationCode());
  }

  public verify() {
    this.store.dispatch(new ConfirmPhone(this.verificationCode.value));
  }

  public goBack() {
    this.previousStep();
  }
}

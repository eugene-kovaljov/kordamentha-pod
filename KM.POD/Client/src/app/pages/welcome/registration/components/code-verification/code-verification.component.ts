import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RegistrationStep } from '../../models';
import { select, Store } from '@ngrx/store';
import { MoveToTheStep, RegistrationStepTypes } from '../../actions';
import { UnsubscribableComponent } from '../../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { takeUntil } from 'rxjs/operators';
import { getTelephone } from '../../selectors';

@Component({
  selector: 'km-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeVerificationComponent extends UnsubscribableComponent implements OnInit, RegistrationStep {
  public verificationCode = new FormControl('');
  public phone = '';

  constructor(private store: Store<any>, private changeDetector: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(getTelephone),
        takeUntil(this.destroy$)
      )
      .subscribe((telephone: string) => {
        this.phone = telephone;
        this.changeDetector.detectChanges();
      });
  }

  public nextStep(): void {
    this.store.dispatch(new MoveToTheStep(RegistrationStepTypes.Password));
  }

  public previousStep(): void {
    this.store.dispatch(new MoveToTheStep(RegistrationStepTypes.Register));
  }

  public resendCode() {}

  public verify() {
    this.nextStep();
  }

  public goBack() {
    this.previousStep();
  }
}

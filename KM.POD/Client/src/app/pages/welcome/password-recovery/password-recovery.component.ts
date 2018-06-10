import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'km-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryComponent {
  public showEmailInput = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public onEmailProvided(value: string): void {
    this.showEmailInput = false;
    this.changeDetector.markForCheck();
  }
}

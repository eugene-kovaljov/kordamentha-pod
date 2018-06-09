import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'km-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeVerificationComponent {
  @Input() data: any;

  public verificationCode = new FormControl('');

  public resendCode() {}

  public verify() {}

  public goBack() {}
}

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordSetupComponent } from '../../../registration/components/password-setup/password-setup.component';
import { PasswordSetup } from '../../../registration/models';

@Component({
  selector: 'km-new-password-setup',
  templateUrl: './new-password-setup.component.html',
  styleUrls: ['./new-password-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordSetupComponent extends PasswordSetupComponent implements OnInit {
  @Output() public onPasswordReset: EventEmitter<PasswordSetup> = new EventEmitter<PasswordSetup>();

  public ngOnInit(): void {
    this.initPasswordForm();
  }

  public addAndSignIn(): void {
    this.onPasswordReset.emit(this.passwordForm.getRawValue());
  }
}

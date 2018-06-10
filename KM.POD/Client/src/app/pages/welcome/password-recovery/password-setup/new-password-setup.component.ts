import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PasswordSetupComponent } from '../../registration/components/password-setup/password-setup.component';

@Component({
  selector: 'km-new-password-setup',
  templateUrl: './new-password-setup.component.html',
  styleUrls: ['./new-password-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordSetupComponent extends PasswordSetupComponent {}

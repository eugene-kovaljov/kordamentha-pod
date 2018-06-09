import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'km-welcome-sidebar',
  templateUrl: './welcome-sidebar.component.html',
  styleUrls: ['./welcome-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeSidebarComponent {}

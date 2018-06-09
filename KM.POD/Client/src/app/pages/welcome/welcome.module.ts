import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';

@NgModule({
  imports: [CommonModule, RoutingModule, SharedModule, NgSelectModule],
  declarations: [WelcomeComponent, WelcomeSidebarComponent],
  exports: []
})
export class WelcomeModule {}

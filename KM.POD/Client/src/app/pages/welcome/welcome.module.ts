import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { WelcomeSidebarComponent } from './welcome-sidebar/welcome-sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RoutingModule, FormsModule, ReactiveFormsModule, SharedModule, NgSelectModule],
  declarations: [WelcomeComponent, WelcomeSidebarComponent, SignInComponent, RegisterComponent],
  exports: []
})
export class WelcomeModule {}

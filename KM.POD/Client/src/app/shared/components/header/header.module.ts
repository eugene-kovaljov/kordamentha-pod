import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';
import { CoreModule } from '../../../core/core.module';
import { RoutingModule } from '../../../core/routing/app.routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule, RoutingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}

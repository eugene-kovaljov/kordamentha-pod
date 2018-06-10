import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { CoreModule } from '../../../core/core.module';
import { RoutingModule } from '../../../core/routing/app.routing.module';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule, RoutingModule],
  declarations: [BannerComponent],
  exports: [BannerComponent]
})
export class BannerModule {}

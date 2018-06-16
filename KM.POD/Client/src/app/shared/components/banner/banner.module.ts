import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { CoreModule } from '../../../core/core.module';
import { RoutingModule } from '../../../core/routing/app.routing.module';
import { BannerComponent } from './banner.component';
import { AdminBannerComponent } from './admin-banner/admin-banner.component';

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule, RoutingModule],
  declarations: [BannerComponent, AdminBannerComponent],
  exports: [BannerComponent, AdminBannerComponent]
})
export class BannerModule {}

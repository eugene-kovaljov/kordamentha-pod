import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { BannerModule } from '../../shared/components/banner/banner.module';
import { SidebarModule } from '../../shared/components/sidebar/sidebar.module';
import { AdminMenuModule } from './admin-menu/admin-menu.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RoutingModule,
    SharedModule,
    FooterModule,
    HeaderModule,
    SidebarModule,
    BannerModule,
    AdminMenuModule,
    AdminDashboardModule
  ],
  declarations: [AdminComponent]
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { BannerModule } from '../../shared/components/banner/banner.module';
import { AccountComponent } from './account/account.component';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from './main-store/reducers';
import { MainPageComponent } from './main-page/main-page.component';
import { AccountModule } from './account/account.module';
import { SidebarModule } from '../../shared/components/sidebar/sidebar.module';

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
    AccountModule,
    StoreModule.forFeature('main', mainReducers)
  ],
  declarations: [MainComponent, MainPageComponent]
})
export class MainModule {}

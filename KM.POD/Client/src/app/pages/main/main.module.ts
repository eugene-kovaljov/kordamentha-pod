import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RoutingModule } from '../../core/routing/app.routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { BannerModule } from '../../shared/components/banner/banner.module';

@NgModule({
  imports: [CommonModule, CoreModule, RoutingModule, SharedModule, FooterModule, HeaderModule, BannerModule],
  declarations: [MainComponent]
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../../../core/routing/app.routing.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbService } from './service/breadcrumb.service';

@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbsModule {}

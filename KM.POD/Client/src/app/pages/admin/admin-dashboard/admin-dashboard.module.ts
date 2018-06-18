import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  imports: [CommonModule, SharedModule, BrowserAnimationsModule],
  declarations: [AdminDashboardComponent, PaginatorComponent],
  exports: [AdminDashboardComponent]
})
export class AdminDashboardModule {}

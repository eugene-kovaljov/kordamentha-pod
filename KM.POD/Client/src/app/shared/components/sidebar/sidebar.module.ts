import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../shared.module';
import { StoreModule } from '@ngrx/store';
import { sidebarReducers } from './reducers/sidebar.reducers';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule, StoreModule.forFeature('sidebar', sidebarReducers)],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}

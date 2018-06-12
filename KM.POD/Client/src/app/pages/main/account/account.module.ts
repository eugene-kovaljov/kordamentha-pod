import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [AccountComponent],
  exports: []
})
export class AccountModule {}

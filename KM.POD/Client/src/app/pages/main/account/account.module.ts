import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { AccountComponent } from './account.component';
import { KmFormModule } from '../../../shared/components/form/km-form.module';

@NgModule({
  imports: [CommonModule, CoreModule, KmFormModule],
  declarations: [AccountComponent],
  exports: []
})
export class AccountModule {}

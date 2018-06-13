import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { AccountComponent } from './account.component';
import { KmFormModule } from '../../../shared/components/form/km-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CoreModule, KmFormModule, ReactiveFormsModule, FormsModule],
  declarations: [AccountComponent],
  exports: []
})
export class AccountModule {}

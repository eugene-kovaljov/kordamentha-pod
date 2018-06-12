import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [FormInputComponent],
  exports: [FormInputComponent]
})
export class KmFormModule {}

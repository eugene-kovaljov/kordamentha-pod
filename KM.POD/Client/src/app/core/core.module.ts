import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdDirective } from './directives/ad.directive';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AdDirective],
  exports: [FormsModule, ReactiveFormsModule, AdDirective],
  providers: [AuthGuard]
})
export class CoreModule {}

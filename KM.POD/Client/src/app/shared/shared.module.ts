import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterModule } from './components/footer/footer.module';
import { DialogModule } from './components/dialogs/dialog.module';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule, FooterModule, DialogModule],
  exports: [AngularSvgIconModule, FooterModule, DialogModule]
})
export class SharedModule {}

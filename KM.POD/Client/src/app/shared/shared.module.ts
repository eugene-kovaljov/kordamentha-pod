import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterModule } from './components/footer/footer.module';
import { DialogModule } from './components/dialogs/dialog.module';
import { TextMaskModule } from 'angular2-text-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule, DialogModule, TextMaskModule, NgSelectModule],
  exports: [AngularSvgIconModule, DialogModule, TextMaskModule, NgSelectModule]
})
export class SharedModule {}

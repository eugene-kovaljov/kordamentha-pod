import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule, FooterModule],
  exports: [AngularSvgIconModule, FooterModule]
})
export class SharedModule {}

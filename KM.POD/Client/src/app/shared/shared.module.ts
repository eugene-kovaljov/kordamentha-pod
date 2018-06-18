import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DialogModule } from './components/dialogs/dialog.module';
import { TextMaskModule } from 'angular2-text-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { BreadcrumbsModule } from './components/breadcrumb/breadcrumbs.module';
import {
  MatExpansionModule, MatMenuModule, MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [MatExpansionModule, MatMenuModule, MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule]
})
export class MaterialModule {
}

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    DialogModule,
    TextMaskModule,
    NgSelectModule,
    BreadcrumbsModule,
    MaterialModule
  ],
  exports: [AngularSvgIconModule, DialogModule, TextMaskModule, NgSelectModule, BreadcrumbsModule, MaterialModule]
})
export class SharedModule {
}

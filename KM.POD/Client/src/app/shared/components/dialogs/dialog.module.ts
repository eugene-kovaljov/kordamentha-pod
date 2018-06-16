import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatAutocompleteModule],
  declarations: [AlertComponent, ConfirmComponent],
  exports: [AlertComponent, ConfirmComponent],
  entryComponents: [AlertComponent, ConfirmComponent]
})
export class DialogModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatAutocompleteModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  entryComponents: [AlertComponent]
})
export class DialogModule {}

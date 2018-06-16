import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'km-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public confirmed(): void {
    this.dialogRef.close(true);
  }

  public canceled(): void {
    this.dialogRef.close(false);
  }

  get getTitle(): boolean {
    return this.data.title || 'Title';
  }

  get getContent(): boolean {
    return this.data.content || 'Message';
  }

  get getCancelButtonText(): boolean {
    return this.data.cancelButtonText || 'Cancel';
  }

  get getConfirmButtonText(): boolean {
    return this.data.confirmButtonText || 'Submit';
  }
}

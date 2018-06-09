import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'km-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(public dialogRef: MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public close(): void {
    this.dialogRef.close(true);
  }
}

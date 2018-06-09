import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'km-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent {
  constructor(public dialogRef: MatDialogRef<PrivacyPolicyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public close(): void {
    this.dialogRef.close(false);
  }

  public approve(): void {
    this.dialogRef.close(true);
  }
}

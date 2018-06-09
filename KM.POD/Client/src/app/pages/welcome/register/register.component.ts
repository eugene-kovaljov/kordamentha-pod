import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, phoneMask } from '../../../shared/validators';
import { MatDialog } from '@angular/material';
import { PrivacyPolicyComponent } from '../dialogs/privacy-policy/privacy-policy.component';
import { Router } from '@angular/router';
import { routes } from '../../../shared/constants/urls';
import { AlertComponent } from '../../../shared/components/dialogs/alert/alert.component';

@Component({
  selector: 'km-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;
  public phoneMask = phoneMask;

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: MatDialog,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public initForm(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      phone: ['', [Validators.required]],
      isChosen: [false, [Validators.requiredTrue]]
    });
  }

  public cancel() {
    this.router.navigate([routes.WELCOME.fullPath]);
  }

  public showTermsOfUse(): void {
    const dialogRef = this.dialogService.open(PrivacyPolicyComponent, {
      autoFocus: false,
      data: {
        title: 'Personal data politics',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites."
      },
      panelClass: 'privacy-politics-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrationForm.get('isChosen').setValue(result);
        this.registrationForm.updateValueAndValidity();
      }

      this.changeDetectorRef.markForCheck();
    });
  }

  public showVerificationScreen(): void {
    const dialogRef = this.dialogService.open(AlertComponent, {
      autoFocus: false,
      data: {
        title: 'Check your phone!',
        message: 'Verification code was recent.'
      },
      panelClass: 'dialog-container'
    });
  }
}

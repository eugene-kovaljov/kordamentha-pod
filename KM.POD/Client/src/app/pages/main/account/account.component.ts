import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/components/dialogs/confirm/confirm.component';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { UnsubscribableComponent } from '../../../shared/components/base-unsubscribe/unsubscribable.component';
import { OnDeactivate } from '../../../core/guards/deactivate.guard';
import { Observable } from 'rxjs/Observable';
import { clientAccountData } from './selectors/account.selectors';
import { ClientAccountData, deleteAccountDialogConfig, leaveWithoutSavingDialogConfig } from './models/account.models';
import {
  AccountStoreActionTypes,
  DeleteClientAccount,
  GetClientAccountData,
  SaveClientAccount
} from './actions/account.actions';
import { filter } from 'rxjs/operators/filter';
import { ClientAccountEffects } from './effects/account.effects';
import { Router } from '@angular/router';
import { routes } from '../../../shared/constants/urls';
import { ShowSidebar } from '../../../shared/components/sidebar/actions/sidebar.actions';
import { RegisterComponent } from '../../welcome/registration/components/register/register.component';

@Component({
  selector: 'km-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent extends UnsubscribableComponent implements OnInit, OnDeactivate {
  @Output() formEmitter = new EventEmitter();

  public accountForm: FormGroup;
  public password: string;
  public email: string;
  public phone: string;

  public pageTitle = 'My Account';

  private accountDeleted = false;
  private originalData: ClientAccountData = null;

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private effects: ClientAccountEffects,
    private dialogService: MatDialog,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {
    super();
  }

  public get isSaveEnabled(): boolean {
    if (this.originalData && this.accountForm) {
      const { firstName, lastName } = this.accountForm.getRawValue();
      const { firstName: originalFirstName, lastName: originalLastName } = this.originalData;

      return firstName !== originalFirstName || lastName !== originalLastName;
    }

    return false;
  }

  public ngOnInit(): void {
    this.store.dispatch(new SetPageTitle(this.pageTitle));
    this.store.dispatch(new GetClientAccountData(null));
    this.setupForm();
    this.listenToAccountEvents();
  }

  public ngOnDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isSaveEnabled) {
      return (
        this.accountDeleted || this.dialogService.open(ConfirmComponent, leaveWithoutSavingDialogConfig).afterClosed()
      );
    }

    return true;
  }

  public saveChanges(): void {
    this.store.dispatch(new SaveClientAccount(this.accountForm.getRawValue()));
  }

  public raiseAccountData(): void {
    this.formEmitter.emit(this.accountForm.getRawValue());
  }

  public getPass(password): void {
    this.password = password;
    this.store.dispatch(new ShowSidebar(RegisterComponent as any));
  }

  public getEmail(password): void {
    this.password = password;
  }

  public getPhone(password): void {
    this.password = password;
  }

  public deleteDialog(): void {
    this.dialogService
      .open(ConfirmComponent, deleteAccountDialogConfig)
      .afterClosed()
      .pipe(
        takeUntil(this.destroy$),
        filter(result => result)
      )
      .subscribe(result => {
        this.store.dispatch(new DeleteClientAccount(null));
      });
  }

  private setupForm(): void {
    this.accountForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [{ value: '', disabled: true }],
      phone: [{ value: '', disabled: true }],
      password: [{ value: '********', disabled: true }]
    });
  }

  private fillForm(accountData: ClientAccountData): void {
    this.accountForm.patchValue({
      firstName: accountData.firstName,
      lastName: accountData.lastName,
      email: accountData.email,
      phone: accountData.phone
    });
  }

  private listenToAccountEvents(): void {
    this.effects.accountDeleting
      .pipe(
        takeUntil(this.destroy$),
        filter(action => action.type === AccountStoreActionTypes.DeleteClientAccountSuccess)
      )
      .subscribe(() => {
        this.accountDeleted = true;
        this.router.navigate([routes.WELCOME.fullPath]);
      });

    this.store
      .pipe(
        select(clientAccountData),
        takeUntil(this.destroy$)
      )
      .subscribe((data: ClientAccountData) => {
        this.fillForm(data);
        this.originalData = { ...data };
        this.changeDetector.markForCheck();
      });
  }
}

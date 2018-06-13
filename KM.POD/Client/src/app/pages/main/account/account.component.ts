import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'km-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Output() formEmitter = new EventEmitter();

  public accountForms: FormGroup;
  public password: string;
  public email: string;
  public phone: string;

  constructor(private store: Store<any>, private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.store.dispatch(new SetPageTitle('My Account'));
    this.accountForms = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      password: ['']
    });
  }

  public raiseAccountData(): void {
    this.formEmitter.emit(this.accountForms.getRawValue());
  }

  public getPass(password): void {
    this.password = password;
  }

  public getEmail(password): void {
    this.password = password;
  }

  public getPhone(password): void {
    this.password = password;
  }
}

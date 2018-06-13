import { Component, OnInit, Output } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'km-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Output() formEmitter = new EventEmitter();

  public accountForms: FormGroup;

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
}

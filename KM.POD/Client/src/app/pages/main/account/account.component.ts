import { Component, OnInit } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'km-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(new SetPageTitle('My Account'));
  }
}

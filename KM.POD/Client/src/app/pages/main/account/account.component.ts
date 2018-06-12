import { Component, OnInit } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { Store } from '@ngrx/store';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'km-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private store: Store<any>, private hs: HeaderService) {}

  public ngOnInit(): void {
    this.hs.sendData('accounts');
    this.store.dispatch(new SetPageTitle('My Account'));
  }
}

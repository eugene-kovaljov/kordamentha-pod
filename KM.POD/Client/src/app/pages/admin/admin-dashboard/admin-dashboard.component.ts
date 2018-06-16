import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetPageTitle } from '../../main/main-store/actions/index';

@Component({
  selector: 'km-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public ngOnInit() {
    this.store.dispatch(new SetPageTitle('Accounts'))
  }
}

import { Component, OnInit } from '@angular/core';
import { SetPageTitle } from '../main-store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'km-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public ngOnInit() {
    this.store.dispatch(new SetPageTitle('Manage your Proof of Debt Claims'));
  }
}

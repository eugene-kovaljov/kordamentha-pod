import { Component } from '@angular/core';
import { getPageTitle } from '../../../../pages/main/main-store/selectors/index';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'km-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.scss']
})
export class AdminBannerComponent  {

  public get pageTitle(): Observable<string> {
    return this.store.pipe(select(getPageTitle));
  }

  constructor(private store: Store<any>) {}

}

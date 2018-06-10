import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/components/breadcrumb/service/breadcrumb.service';
import { Store } from '@ngrx/store';
import { SetPageTitle } from './main-store/actions';

@Component({
  selector: 'km-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  //do not remove breadcrumb service
  constructor(private breadcrumbService: BreadcrumbService, private store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(new SetPageTitle('Manage your Proof of Debt Claims'));
  }
}

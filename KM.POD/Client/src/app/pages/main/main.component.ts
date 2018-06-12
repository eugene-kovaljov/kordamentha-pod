import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BreadcrumbService } from '../../shared/components/breadcrumb/service/breadcrumb.service';
import { Store } from '@ngrx/store';
import { SetPageTitle } from './main-store/actions';
import { HeaderService } from './service/header.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'km-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  dataPassed: any = '';
  showHeader = true;
  subscription: Subscription;

  //do not remove breadcrumb service
  constructor(private breadcrumbService: BreadcrumbService, private store: Store<any>, private hs: HeaderService) {}

  public ngOnInit(): void {
    this.store.dispatch(new SetPageTitle('Manage your Proof of Debt Claims'));
    this.subscription = this.hs.getData().subscribe(cssClass => {
      this.dataPassed = cssClass;
      this.showHeader = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

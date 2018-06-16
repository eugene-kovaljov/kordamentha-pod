import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/components/breadcrumb/service/breadcrumb.service';
import { select, Store } from '@ngrx/store';
import { SetPageTitle } from './main-store/actions';
import { UnsubscribableComponent } from '../../shared/components/base-unsubscribe/unsubscribable.component';
import { sidebarShown } from '../../shared/components/sidebar/selectors/sidebar.selectors';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'km-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends UnsubscribableComponent implements OnInit {
  public isSidebarShown = false;

  //do not remove breadcrumb service
  constructor(
    private breadcrumbService: BreadcrumbService,
    private store: Store<any>,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(sidebarShown),
        takeUntil(this.destroy$)
      )
      .subscribe((isSidebarShown: boolean) => {
        this.isSidebarShown = isSidebarShown;
        this.changeDetector.markForCheck();
      });
  }
}

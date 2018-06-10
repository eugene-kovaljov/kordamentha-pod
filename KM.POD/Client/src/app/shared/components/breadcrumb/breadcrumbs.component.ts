import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBreadcrumb } from './service/breadcrumb.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getBreadcrumbs } from '../../../pages/main/main-store/selectors';

@Component({
  selector: 'km-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  public get breadcrumbs(): Observable<IBreadcrumb[]> {
    return this.store.pipe(select(getBreadcrumbs));
  }
  constructor(public store: Store<any>) {}
}

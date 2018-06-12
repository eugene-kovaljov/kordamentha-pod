import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
import { getPageTitle } from '../../../pages/main/main-store/selectors';

@Component({
  selector: 'km-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Input() cls = '';
  public get pageTitle(): Observable<string> {
    return this.store.pipe(select(getPageTitle));
  }

  constructor(private store: Store<any>) {}
}

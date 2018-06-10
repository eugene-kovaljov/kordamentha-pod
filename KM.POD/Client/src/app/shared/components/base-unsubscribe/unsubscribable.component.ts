import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class UnsubscribableComponent implements OnDestroy {
  public destroy$: Subject<boolean> = new Subject<boolean>();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}

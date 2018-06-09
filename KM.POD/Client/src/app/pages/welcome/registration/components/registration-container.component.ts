import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { AdDirective } from '../../../../core/directives/ad.directive';
import { select, Store } from '@ngrx/store';
import { takeUntil, finalize } from 'rxjs/operators';
import { UnsubscribableComponent } from '../../../../shared/components/base-unsubscribe/unsubscribable.component';
import { getCurrentStep } from '../selectors';

@Component({
  selector: 'km-registration-container',
  templateUrl: './registration-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationContainerComponent extends UnsubscribableComponent implements OnInit {
  @ViewChild(AdDirective) public adHost: AdDirective;

  constructor(
    private store: Store<any>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(getCurrentStep),
        takeUntil(this.destroy$)
      )
      .subscribe((data: Type<Component>) => {
        this.loadComponent(data);
        this.changeDetector.detectChanges();
      });
  }

  public loadComponent(component: Type<Component>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<Component>(component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }
}

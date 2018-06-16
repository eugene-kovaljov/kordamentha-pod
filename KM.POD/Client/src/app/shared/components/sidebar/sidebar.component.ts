import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { UnsubscribableComponent } from '../base-unsubscribe/unsubscribable.component';
import { AdDirective } from '../../../core/directives/ad.directive';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { getSidebarComponent } from './selectors/sidebar.selectors';

@Component({
  selector: 'km-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends UnsubscribableComponent implements OnInit {
  @ViewChild(AdDirective) public adHost: AdDirective;

  public showSidebar = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<any>,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(getSidebarComponent),
        takeUntil(this.destroy$)
      )
      .subscribe((component: Type<Component>) => {
        this.showSidebar = component !== null;

        if (this.showSidebar) {
          this.loadComponent(component);
        } else {
          this.hide();
        }

        this.changeDetector.markForCheck();
      });
  }

  public loadComponent(component: Type<Component>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<Component>(component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  public hide(): void {
    this.adHost.viewContainerRef.clear();
  }
}

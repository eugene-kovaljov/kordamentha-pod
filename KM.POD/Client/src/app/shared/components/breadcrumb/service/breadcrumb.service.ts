import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { Store } from '@ngrx/store';
import { SetBreadcrumbs } from '../../../../pages/main/main-store/actions';

export interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Injectable()
export class BreadcrumbService {
  private readonly ROUTE_DATA_BREADCRUMB = 'breadcrumbs';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<any>) {
    this.router.events
      .pipe(
        filter(event => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(event => {
        this.store.dispatch(new SetBreadcrumbs(this.getBreadcrumbs(this.activatedRoute.root)));
      });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;

      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[this.ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}

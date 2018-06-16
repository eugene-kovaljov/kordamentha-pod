import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface OnDeactivate {
  ngOnDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

export class DeactivateGuard implements CanDeactivate<Component & OnDeactivate> {
  canDeactivate(
    component: Component & OnDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.ngOnDeactivate();
  }
}

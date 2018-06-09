import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[kmAdHost]'
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

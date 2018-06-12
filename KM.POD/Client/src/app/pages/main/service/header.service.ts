import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  private subject = new Subject<any>();

  sendData(cssClass: string) {
    this.subject.next(cssClass);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ClientAccountData } from '../models/account.models';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ClientAccountService {
  constructor(private http: HttpClient) {}

  public getAccountData(payload: any): Observable<ClientAccountData> {
    return of({
      email: 'johndoe@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+61754554545'
    });
  }

  public deleteAccount(payload: any): Observable<any> {
    return of({});
  }

  public updateAccount(payload: ClientAccountData): Observable<any> {
    return of(payload);
  }
}

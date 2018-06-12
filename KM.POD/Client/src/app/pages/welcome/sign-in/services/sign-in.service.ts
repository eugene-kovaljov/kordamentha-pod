import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LoginPayload } from '../models';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignInService {
  constructor(private http: HttpClient) {}

  public signIn(model: LoginPayload): Observable<any> {
    return this.http.post<string>(environment.ENDPOINTS.SIGN_IN, model);
    // return of('good');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';
import { ChangePasswordPayload, ChangePasswordToken, PasswordRecoveryEmailPayload } from '../models';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PasswordRecoveryService {
  constructor(private readonly http: HttpClient) {}

  public sendEmail(email: PasswordRecoveryEmailPayload): Observable<ChangePasswordToken> {
    // return this.http.post<ChangePasswordToken>(environment.ENDPOINTS.FORGOT_PASSWORD_EMAIL, email);
    return of({ token: '123' });
  }

  public changePassword(payload: ChangePasswordPayload): Observable<any> {
    // return this.http.post<string>(environment.ENDPOINTS.CHANGE_PASSWORD, payload);
    return of({ authToken: '12312' });
  }
}

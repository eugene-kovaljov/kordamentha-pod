import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';
import {
  AccountData,
  PasswordSetupPayload,
  PasswordSetupResponse,
  PhoneVerificationCode,
  PhoneVerificationToken
} from '../models';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient) {}

  public createAccount(accountData: AccountData): Observable<PhoneVerificationCode> {
    /* return this.http.post<string>(environment.ENDPOINTS.CREATE_ACCOUNT, accountData);*/
    return of({ code: '12345' });
  }

  public resendVerificationCode(accountData: AccountData): Observable<PhoneVerificationCode> {
    /* return this.http.post<string>(environment.ENDPOINTS.RESEND_VERIFICATION_CODE, accountData);*/
    return of({ code: '12345' });
  }

  public confirmPhone(accountData: AccountData): Observable<PhoneVerificationToken> {
    /* return this.http.post<string>(environment.ENDPOINTS.CONFIRM_PHONE, accountData);*/
    return of({ token: '12345' });
  }

  public setPassword(payload: PasswordSetupPayload): Observable<PasswordSetupResponse> {
    /* return this.http.post<string>(environment.ENDPOINTS.SET_PASSWORD, payload);*/
    return of({ email: '12345', token: '12345' });
  }
}

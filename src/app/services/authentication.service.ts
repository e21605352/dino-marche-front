import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { TokenManager } from '../authentication/tokenManager/TokenManager';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private tokenManager: TokenManager) {
    this.token = tokenManager.retrieve() || "";
  }

  login(data: any): Observable<any> {
    const o = this.http.post(`${baseUrl}customer`, data, {
      headers: {
        "Authorization": this.token,
      },
    });
    o.subscribe((data) => {
      this.token = (data as { token: string }).token;
      this.tokenManager.store((data as { token: string }).token);
    });
    return o;
  }

  createAccount(data: any): Observable<any> {
    return this.http.post(`${baseUrl}customer/create`, data, {
      headers: {
        "Authorization": this.token,
      },
    });
  }
}
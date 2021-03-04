import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { TokenManager } from '../authentication/tokenManager/TokenManager';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private header: any;

  constructor(private http: HttpClient, private tokenManager: TokenManager) {
    this.header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(tokenManager.retrieve())}`)
    }
  }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}customer`, data, this.header);
  }

  createAccount(data: any): Observable<any> {
    return this.http.post(`${baseUrl}customer/create`, data, this.header);
  }
}
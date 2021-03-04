import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}customer`, data);
  }

  createAccount(data: any): Observable<any> {
    return this.http.post(`${baseUrl}customer/create`, data);
  }
}
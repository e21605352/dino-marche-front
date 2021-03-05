import { NgModule } from '@angular/core';
import jwt_decode from 'jwt-decode';

@NgModule()
export class TokenManager {

    private tokenKey: string = 'app_token';

    public store(content: string) {
        localStorage.setItem(this.tokenKey, content);
    }

    public retrieve() {
        return localStorage.getItem(this.tokenKey);
    }

    public getDecodedAccessToken(): any {
        let res = localStorage.getItem(this.tokenKey);
        if (res != null) return jwt_decode(res);
        return null;
    }
}
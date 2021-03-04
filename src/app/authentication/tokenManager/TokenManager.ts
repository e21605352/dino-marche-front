import { Injectable, NgModule } from '@angular/core'

@NgModule()
export class TokenManager {

    private tokenKey: string = 'app_token';

    public store(content: Object) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    }

    public retrieve() {
        let storedToken: string | null = localStorage.getItem(this.tokenKey);
        if (!storedToken) throw 'no token found';
        return storedToken;
    }
}
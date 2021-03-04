import { NgModule } from '@angular/core';

@NgModule()
export class TokenManager {

    private tokenKey: string = 'app_token';

    public store(content: string) {
        localStorage.setItem(this.tokenKey, content);
    }

    public retrieve() {
        return localStorage.getItem(this.tokenKey);
    }
}
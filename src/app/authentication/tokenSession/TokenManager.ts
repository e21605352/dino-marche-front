import { Injectable } from '@angular/core'

@Injectable()
export class TokenManager {

    private tokenKey: string = 'token';

    public store(content: Object) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    }

    public retrieve() {
        let storedToken: any = localStorage.getItem(this.tokenKey);
        if (storedToken == null) throw 'no token found';
        return storedToken;
    }

}
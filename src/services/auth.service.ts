import { Injectable, signal } from "@angular/core";

@Injectable()
export class AuthService {
    isAuthenticated = signal<boolean>(false);

    setAuthenticated() {
        this.isAuthenticated.set(true);
    }
}
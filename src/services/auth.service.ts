import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private refreshToken = signal<string>("");
    private accessToken = signal<string>("");

    isAuthenticated = signal<boolean>(true);

    initialize() {
        const refreshToken = localStorage.getItem("refresh-token");
        const accessToken = localStorage.getItem("access-token");
        
        if (refreshToken && refreshToken.length > 1) {
            this.refreshToken.set(refreshToken);
        } else {
            localStorage.setItem('refresh-token', '');
        }

        if (accessToken && accessToken.length > 1) {
            this.accessToken.set(accessToken);
        } else {
            localStorage.setItem('access-token', '');
        }
    }

    setRefreshToken(refreshToken: string) {
        localStorage.setItem('refresh-token', refreshToken);
        this.refreshToken.set(refreshToken);
    }

    setAccessToken(accessToken: string) {
        localStorage.setItem('access-token', '');
        this.accessToken.set(accessToken);
    }

    setAuthenticated() {
        this.isAuthenticated.set(true);
    }
}
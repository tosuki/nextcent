import { Component, inject, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { AuthService } from "../../services/auth.service";

import { HeaderUserButtonComponent } from './header-user-button.component'

@Component({
    selector: 'app-header',
    imports: [NgOptimizedImage, HeaderUserButtonComponent],
    templateUrl: './header.template.html',
    styleUrl: './header.styles.css'
})
export class HeaderComponent {
    private authService = inject(AuthService);

    username = input<string|null>(null);

    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}
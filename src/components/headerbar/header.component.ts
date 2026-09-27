import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-header',
    imports: [NgOptimizedImage],
    templateUrl: './header.template.html',
    styleUrl: './header.styles.css'
})
export class HeaderComponent {
    username = input<string|null>(null)

    isAuthenticated(): boolean {
        return this.username !== null;
    }
}
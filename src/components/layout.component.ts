import { Component } from "@angular/core";

import { HeaderComponent } from "./headerbar/header.component";
import { HeroSectionComponent } from "./sections/hero/hero-section.component";
import { ClientSectionComponent } from "./sections/clients/clients-section.component";
import { CommunityComponent } from "./sections/community/community-section.component";

@Component({
    selector: 'app-layout',
    imports: [
        HeaderComponent,
        HeroSectionComponent,
        ClientSectionComponent,
        CommunityComponent
    ],
    styles: `
        .container {
            width: 100%;
            height: 100%;
        }
    `,
    template: `
        <div class="container">
            <app-header />
            <app-hero-section />
            <app-clients-section />
            <app-community-section />
        </div>
    `
})
export class LayoutComponent {}
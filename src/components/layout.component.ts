import { Component } from "@angular/core";

import { HeaderComponent } from "./headerbar/header.component";
import { HeroSectionComponent } from "./sections/hero/hero-section.component";
import { ClientSectionComponent } from "./sections/clients/clients-section.component";
import { CommunityComponent } from "./sections/community/community-section.component";
import { UnlockSectionComponent } from "./sections/unlock/unlock-section.component";
import { AchievementsSectionComponent } from "./sections/achievements/achievements-section.component";

@Component({
    selector: 'app-layout',
    imports: [
    HeaderComponent,
    HeroSectionComponent,
    ClientSectionComponent,
    CommunityComponent,
    UnlockSectionComponent,
    AchievementsSectionComponent
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
            <app-unlock-section />
            <app-achievements-section />
        </div>
    `
})
export class LayoutComponent {}
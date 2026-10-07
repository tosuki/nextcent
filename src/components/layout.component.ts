import { Component } from "@angular/core";

import { HeaderComponent } from "./headerbar/header.component";
import { HeroSectionComponent } from "../pages/home/sections/hero/hero-section.component";
import { ClientSectionComponent } from "../pages/home/sections/clients/clients-section.component";
import { CommunityComponent } from "../pages/home/sections/community/community-section.component";
import { UnlockSectionComponent } from "../pages/home/sections/unlock/unlock-section.component";
import { AchievementsSectionComponent } from "../pages/home/sections/achievements/achievements-section.component";
import { CalendarSectionComponent } from "../pages/home/sections/calendar/calendar-section.component";
import { CommunityUpdateSectionComponent } from "../pages/home/sections/communityupdate/community-update.component";
import { FooterComponent } from "../pages/home/sections/footer/footer.component";

@Component({
    selector: 'app-layout',
    imports: [
        HeaderComponent,
        HeroSectionComponent,
        ClientSectionComponent,
        CommunityComponent,
        UnlockSectionComponent,
        AchievementsSectionComponent,
        CalendarSectionComponent,
        CommunityUpdateSectionComponent,
        FooterComponent
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
            <app-calendar-section />
            <app-community-update-section />
            <app-footer />
        </div>
    `
})
export class LayoutComponent {}
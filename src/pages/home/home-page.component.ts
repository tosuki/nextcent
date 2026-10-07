import { Component } from "@angular/core";

import { HeaderComponent } from "../../components/headerbar/header.component";
import { HeroSectionComponent } from "./sections/hero/hero-section.component";
import { ClientSectionComponent } from "./sections/clients/clients-section.component";
import { CommunityComponent } from "./sections/community/community-section.component";
import { UnlockSectionComponent } from "./sections/unlock/unlock-section.component";
import { AchievementsSectionComponent } from "./sections/achievements/achievements-section.component";
import { CommunityUpdateSectionComponent } from "./sections/communityupdate/community-update.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { CalendarSectionComponent } from "./sections/calendar/calendar-section.component";

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
export class LayoutComponent { }
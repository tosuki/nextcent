import { Component } from "@angular/core";
import { CommunityFrameComponent } from "./community-frame.component"

@Component({
    selector: 'app-community-section',
    templateUrl: './community-section.template.html',
    styleUrl: './community-section.styles.css',
    imports: [CommunityFrameComponent]
})
export class CommunityComponent {}
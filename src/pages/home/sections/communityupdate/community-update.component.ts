import { Component } from "@angular/core";
import { CommunityUpdateFrameComponent } from "./community-update-frame.component";

export type BlogCard = {
    title: string;
    image: string;
    link: string;
};

@Component({
    selector: 'app-community-update-section',
    templateUrl: './community-update.template.html',
    styleUrl: './community-update.styles.css',
    imports: [CommunityUpdateFrameComponent]
})
export class CommunityUpdateSectionComponent {
    public cards: BlogCard[] = [
        {
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            image: "assets/communityupdate/a.png",
            link: "#"
        },
        {
            title: "What are your safeguarding responsibilities and how can you manage them?",
            image: "assets/communityupdate/b.png",
            link: "#"
        },
        {
            title: "Revamping the Membership Model with Triathlon Australia",
            image: "assets/communityupdate/c.png",
            link: "#"
        }
    ];
}

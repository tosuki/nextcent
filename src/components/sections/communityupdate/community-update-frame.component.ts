import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-community-update-frame',
    template: `
        <article class="community-update-frame">
            <div class="thumb">
                <img [ngSrc]="imgUrl()" fill [alt]="title()"/>
            </div>
            <div class="body">
                <h4>{{ title() }}</h4>
                <a [href]="link()" class="read-more">
                    Readmore
                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 1.5L15.5 4.5M15.5 4.5L12.5 7.5M15.5 4.5L1.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </article>
    `,
    styles: `
        :host {
            display: flex;
            flex: 1;
        }

        .community-update-frame {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .community-update-frame .thumb {
            position: relative;
            width: 100%;
            height: 286px;
            border-radius: 8px;
            overflow: hidden;
        }

        .community-update-frame .thumb img {
            object-fit: cover;
        }

        .community-update-frame .body {
            position: relative;
            z-index: 1;
            margin-top: -90px;
            width: 88%;
            min-height: 168px;

            background-color: var(--silver);
            border-radius: 8px;
            padding: 16px 20px;
            box-shadow: 0px 8px 16px rgba(171, 190, 209, 0.4);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            gap: 16px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .community-update-frame:hover .body {
            transform: translateY(-4px);
            box-shadow: 0px 12px 24px rgba(171, 190, 209, 0.5);
        }

        .community-update-frame .body h4 {
            color: var(--d-grey);
            font-size: 17px;
            font-weight: 600;
            line-height: 1.4;
        }

        .community-update-frame .body .read-more {
            color: var(--primary);
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: gap 0.2s ease;
        }

        .community-update-frame .body .read-more:hover {
            gap: 12px;
        }
    `,
    imports: [NgOptimizedImage]
})
export class CommunityUpdateFrameComponent {
    public title = input.required<string>();
    public imgUrl = input.required<string>();
    public link = input<string>('#');
}
import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-headerbar-user-button',
    template: `
        <button class="headerbar-user-button" type="button" aria-label="Perfil do usuário">
            <div class="avatar-wrapper">
                <img [ngSrc]="img()" fill [alt]="username()" class="avatar-img"/>
            </div>
            <div class="user-info">
                <span class="user-name">{{ username() }}</span>
                <span class="user-plan">{{ plan() }}</span>
            </div>
            <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
    `,
    styles: `
        :host {
            display: inline-flex;
            align-items: center;
        }

        .headerbar-user-button {
            display: flex;
            align-items: center;
            background: transparent;
            border: none;
            padding: 4px 6px;
            margin: 0;
            cursor: pointer;
            font-family: inherit;
            text-align: left;
            border-radius: 8px;
            transition: opacity 0.2s ease, background-color .2s;
        }

        .headerbar-user-button:hover {
            opacity: 0.85;
        }

        .avatar-wrapper {
            position: relative;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            margin-right: 14px;
        }

        .avatar-img {
            object-fit: cover;
            border-radius: 50%;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2px;
        }

        .user-name {
            font-size: 16px;
            font-weight: 600;
            color: var(--secondary, #263238);
            line-height: 1.25;
            white-space: nowrap;
        }

        .user-plan {
            font-size: 14px;
            font-weight: 400;
            color: var(--grey, #717171);
            line-height: 1.25;
            white-space: nowrap;

            transition: color .2s;
        }

        .chevron-icon {
            width: 18px;
            height: 18px;
            color: var(--grey, #717171);
            margin-left: 20px;
            flex-shrink: 0;
            transition: color 0.2s ease, transform 0.2s ease;
        }

        .headerbar-user-button:hover .chevron-icon {
            color: var(--secondary, #263238);
        }

        .headerbar-user-button:hover {
            background-color: var(--grey-blue);
        }

        .headerbar-user-button:hover .user-plan {
            color: var(--d-grey);
        }
    `,
    imports: [NgOptimizedImage]
})
export class HeaderUserButtonComponent {
    img = input.required<string>();
    username = input.required<string>();
    plan = input.required<string>();
}


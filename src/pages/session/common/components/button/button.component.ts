import { Component, input, output } from "@angular/core";

@Component({
    selector: 'app-button',
    template: `
        <button
            [type]="type()"
            [disabled]="disabled()"
            (click)="clicked.emit()"
            class="submit-button"
            [class.disabled]="disabled()"
        >
            <span class="button-label">{{ label() }}</span>
            @if (showArrow()) {
                <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
            }
        </button>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
        }

        .submit-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding: 12px 20px;
            background-color: var(--p-shade-1, #43a046);
            color: var(--white, #FFFFFF);
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 500;
            font-family: inherit;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
            box-sizing: border-box;
        }

        .submit-button:hover:not(:disabled) {
            background-color: var(--p-shade-2, #388e3b);
            box-shadow: 0 4px 12px rgba(67, 160, 70, 0.25);
        }

        .submit-button:active:not(:disabled) {
            transform: scale(0.99);
        }

        .submit-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: var(--grey-blue, #ABBED1);
        }

        .arrow-icon {
            flex-shrink: 0;
            transition: transform 0.2s ease;
        }

        .submit-button:hover:not(:disabled) .arrow-icon {
            transform: translateX(3px);
        }
    `
})
export class ButtonComponent {
    label = input.required<string>();
    showArrow = input<boolean>(true);
    type = input<'submit' | 'button'>('submit');
    disabled = input<boolean>(false);
    clicked = output<void>();
}

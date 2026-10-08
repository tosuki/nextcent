import { Component, computed, input } from "@angular/core";

@Component({
    selector: 'app-password-strength',
    template: `
        <div class="strength-container">
            <div class="strength-bars">
                <span class="bar" [class.active]="level() >= 1" [class.weak]="level() === 1" [class.medium]="level() === 2" [class.strong]="level() === 3"></span>
                <span class="bar" [class.active]="level() >= 2" [class.medium]="level() === 2" [class.strong]="level() === 3"></span>
                <span class="bar" [class.active]="level() >= 3" [class.strong]="level() === 3"></span>
            </div>
            <p class="strength-message">{{ message() }}</p>
        </div>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
            margin-top: 8px;
            margin-bottom: 4px;
        }

        .strength-container {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .strength-bars {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
            width: 100%;
        }

        .bar {
            height: 3px;
            background-color: #E2E8F0;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }

        .bar.active.weak {
            background-color: var(--warning, #fbc02d);
        }

        .bar.active.medium,
        .bar.active.strong {
            background-color: var(--primary, #28CB8B);
        }

        .strength-message {
            font-size: 11.5px;
            color: var(--grey, #717171);
            margin: 0;
            line-height: 1.3;
        }
    `
})
export class PasswordStrengthComponent {
    password = input<string>('');

    // Level: 0 = none, 1 = weak, 2 = medium, 3 = strong
    level = computed(() => {
        const val = this.password() || '';
        if (!val) return 2; // Default to matching mockup state if initial
        if (val.length < 6) return 1;

        const hasLetters = /[a-zA-Z]/.test(val);
        const hasNumbers = /[0-9]/.test(val);
        const hasSymbols = /[^a-zA-Z0-9]/.test(val);

        const score = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0) + (hasSymbols ? 1 : 0);

        if (val.length >= 8 && score >= 3) return 3;
        if (val.length >= 6 && score >= 2) return 2;
        return 1;
    });

    message = computed(() => {
        const lvl = this.level();
        if (lvl === 3) return 'Senha forte: excelente combinação';
        if (lvl === 2) return 'Senha média : use números e símbolos';
        return 'Senha fraca : adicione mais caracteres e números';
    });
}

import { Component, forwardRef, input, signal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'app-input',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ],
    template: `
        <div class="input-group">
            @if (label()) {
                <label [for]="id()" class="input-label">{{ label() }}</label>
            }

            <div class="input-wrapper" [class.focused]="isFocused()" [class.disabled]="disabled()">
                @if (icon() === 'mail') {
                    <svg class="icon leading-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                } @else if (icon() === 'lock') {
                    <svg class="icon leading-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                } @else if (icon() === 'user') {
                    <svg class="icon leading-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="8" r="5"/>
                        <path d="M20 21a8 8 0 0 0-16 0"/>
                    </svg>
                }

                <input
                    [id]="id()"
                    [type]="computedType()"
                    [placeholder]="placeholder()"
                    [value]="value()"
                    [disabled]="disabled()"
                    [attr.autocomplete]="autocomplete()"
                    (input)="onInputChange($event)"
                    (blur)="onBlur()"
                    (focus)="onFocus()"
                    class="native-input"
                    [class.has-leading-icon]="!!icon()"
                    [class.has-trailing-icon]="type() === 'password'"
                />

                @if (type() === 'password') {
                    <button
                        type="button"
                        class="toggle-password-btn"
                        (click)="togglePasswordVisibility()"
                        [attr.aria-label]="showPassword() ? 'Ocultar senha' : 'Exibir senha'"
                    >
                        @if (showPassword()) {
                            <svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        } @else {
                            <svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                <line x1="2" x2="22" y1="2" y2="22"/>
                            </svg>
                        }
                    </button>
                }
            </div>
        </div>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .input-label {
            font-size: 13px;
            font-weight: 500;
            color: var(--secondary, #263238);
            margin-bottom: 6px;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            background-color: var(--white, #FFFFFF);
            border: 1px solid #E2E8F0;
            border-radius: 10px;
            box-sizing: border-box;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-wrapper.focused {
            border-color: var(--primary, #28CB8B);
            box-shadow: 0 0 0 3px rgba(40, 203, 139, 0.15);
        }

        .input-wrapper.disabled {
            background-color: var(--silver, #F5F7FA);
            cursor: not-allowed;
            opacity: 0.7;
        }

        .native-input {
            width: 100%;
            padding: 11px 14px;
            border: none;
            background: transparent;
            font-size: 14px;
            color: var(--secondary, #263238);
            outline: none;
            box-sizing: border-box;
            font-family: inherit;
        }

        .native-input::placeholder {
            color: var(--grey-blue, #ABBED1);
            font-weight: 400;
        }

        .native-input.has-leading-icon {
            padding-left: 40px;
        }

        .native-input.has-trailing-icon {
            padding-right: 42px;
        }

        .leading-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--l-grey, #89939E);
            pointer-events: none;
            flex-shrink: 0;
        }

        .toggle-password-btn {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--l-grey, #89939E);
            border-radius: 4px;
            transition: color 0.2s ease;
        }

        .toggle-password-btn:hover {
            color: var(--secondary, #263238);
        }
    `
})
export class InputComponent implements ControlValueAccessor {
    label = input<string>('');
    placeholder = input<string>('');
    type = input<string>('text');
    icon = input<'mail' | 'lock' | 'user' | null>(null);
    id = input<string>('');
    autocomplete = input<string>('off');

    value = signal<string>('');
    disabled = signal<boolean>(false);
    isFocused = signal<boolean>(false);
    showPassword = signal<boolean>(false);

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    computedType(): string {
        if (this.type() === 'password') {
            return this.showPassword() ? 'text' : 'password';
        }
        return this.type();
    }

    togglePasswordVisibility(): void {
        this.showPassword.update(prev => !prev);
    }

    onInputChange(event: Event): void {
        const val = (event.target as HTMLInputElement).value;
        this.value.set(val);
        this.onChange(val);
    }

    onFocus(): void {
        this.isFocused.set(true);
    }

    onBlur(): void {
        this.isFocused.set(false);
        this.onTouched();
    }

    writeValue(val: string): void {
        this.value.set(val || '');
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}

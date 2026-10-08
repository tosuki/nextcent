import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

import { LayoutComponent } from "../common/components/layout/layout.component";
import { SocialButtonComponent } from "../common/components/social-button/social-button.component";
import { InputComponent } from "../common/components/input/input.component";
import { ButtonComponent } from "../common/components/button/button.component";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: 'app-signin-page',
    imports: [
        ReactiveFormsModule,
        RouterLink,
        NgOptimizedImage,
        LayoutComponent,
        SocialButtonComponent,
        InputComponent,
        ButtonComponent
    ],
    template: `
        <app-session-layout [img]="'assets/session/signin.png'">
            <div class="card-content">
                <header class="brand-header">
                    <a routerLink="/" class="brand-link">
                        <img ngSrc="assets/brand.png" width="30" height="21" alt="Nexcent" priority />
                        <span class="brand-name">Nexcent</span>
                    </a>
                </header>

                <div class="headings">
                    <h1 class="card-title">Boas-vindas de volta</h1>
                    <p class="card-subtitle">
                        Entre para continuar sua trilha de aprendizado e acompanhar seu progresso.
                    </p>
                </div>

                <app-social-button
                    label="Continuar com Google"
                    (clicked)="onGoogleLogin()"
                />

                <div class="divider">
                    <span class="divider-text">ou entre com e-mail</span>
                </div>

                <form [formGroup]="form" (ngSubmit)="onSubmit()" class="session-form">
                    <div class="form-fields">
                        <app-input
                            label="E-mail"
                            placeholder="voce@empresa.com"
                            type="email"
                            icon="mail"
                            formControlName="email"
                            autocomplete="email"
                        />

                        <app-input
                            label="Senha"
                            placeholder="Digite sua senha"
                            type="password"
                            icon="lock"
                            formControlName="password"
                            autocomplete="current-password"
                        />
                    </div>

                    <div class="form-options">
                        <label class="remember-checkbox">
                            <input type="checkbox" formControlName="rememberMe" />
                            <span class="checkbox-label">Lembrar de mim</span>
                        </label>
                        <a href="#" (click)="$event.preventDefault()" class="forgot-password-link">
                            Esqueci minha senha
                        </a>
                    </div>

                    <app-button
                        label="Entrar"
                        type="submit"
                        [disabled]="form.invalid && form.touched"
                    />
                </form>

                <p class="switch-link-wrapper">
                    Ainda não tem conta?
                    <a routerLink="/signup" class="highlight-link">Criar conta grátis</a>
                </p>

                <footer class="copyright-footer">
                    © 2026 Nexcent. Aprenda hoje, transforme o amanhã.
                </footer>
            </div>
        </app-session-layout>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: 100%;
        }

        .brand-header {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
        }

        .brand-link {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
        }

        .brand-name {
            font-size: 20px;
            font-weight: 700;
            color: var(--secondary, #263238);
            letter-spacing: -0.3px;
        }

        .headings {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .card-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--secondary, #263238);
            margin: 0;
            letter-spacing: -0.4px;
        }

        .card-subtitle {
            font-size: 13.5px;
            line-height: 1.45;
            color: var(--grey, #717171);
            margin: 0;
        }

        .divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 2px 0;
        }

        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #E2E8F0;
        }

        .divider-text {
            padding: 0 12px;
            font-size: 12px;
            color: var(--l-grey, #89939E);
            font-weight: 400;
        }

        .session-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .form-fields {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .form-options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 13px;
        }

        .remember-checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            user-select: none;
            color: var(--grey, #717171);
        }

        .remember-checkbox input[type="checkbox"] {
            width: 16px;
            height: 16px;
            accent-color: var(--primary, #28CB8B);
            cursor: pointer;
            border-radius: 4px;
        }

        .forgot-password-link {
            color: var(--p-shade-1, #43a046);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .forgot-password-link:hover {
            color: var(--p-shade-2, #388e3b);
            text-decoration: underline;
        }

        .switch-link-wrapper {
            text-align: center;
            font-size: 13px;
            color: var(--grey, #717171);
            margin: 4px 0 0 0;
        }

        .highlight-link {
            color: var(--p-shade-1, #43a046);
            text-decoration: none;
            font-weight: 600;
            margin-left: 4px;
            transition: color 0.2s ease;
        }

        .highlight-link:hover {
            color: var(--p-shade-2, #388e3b);
            text-decoration: underline;
        }

        .copyright-footer {
            margin-top: auto;
            padding-top: 16px;
            font-size: 11.5px;
            color: var(--grey-blue, #ABBED1);
            text-align: left;
        }
    `
})
export class SignInPageComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false]
    });

    onGoogleLogin(): void {
        this.authService.setAuthenticated();
        this.authService.setAccessToken("sample-google-access-token");
        this.router.navigate(['/']);
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.authService.setAuthenticated();
            this.authService.setAccessToken("sample-access-token");
            this.router.navigate(['/']);
        } else {
            this.form.markAllAsTouched();
        }
    }
}

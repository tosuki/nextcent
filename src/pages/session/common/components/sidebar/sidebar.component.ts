import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-sidebar',
    imports: [NgOptimizedImage],
    template: `
        <aside class="sidebar-container">
            <div class="sidebar-header">
                <span class="badge">APRENDIZADO CONTÍNUO</span>
                <h2 class="title">Conhecimento que acompanha sua evolução.</h2>
                <p class="description">
                    Cursos práticos, especialistas de mercado e uma jornada feita para profissionais que querem avançar.
                </p>
            </div>

            <div class="image-wrapper">
                <img [ngSrc]="img()" width="680" height="450" [alt]="'Ilustração ' + title" class="illustration" priority />
            </div>

            <div class="sidebar-footer">
                <div class="stat-item rating">
                    <span class="star">★</span>
                    <span class="stat-text"><strong>4,9</strong> de avaliação</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item students">
                    <span class="stat-text"><strong>+24 mil</strong> profissionais aprendendo</span>
                </div>
            </div>
        </aside>
    `,
    styles: `
        :host {
            display: block;
            height: 100%;
        }

        .sidebar-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 48px 40px;
            box-sizing: border-box;
        }

        .sidebar-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
        }

        .badge {
            display: inline-block;
            background-color: var(--p-tint-5, #e8f5e9);
            color: var(--p-shade-2, #388e3b);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 100px;
        }

        .title {
            font-size: 32px;
            font-weight: 700;
            line-height: 1.25;
            color: var(--secondary, #263238);
            margin: 0;
            letter-spacing: -0.5px;
        }

        .description {
            font-size: 15px;
            line-height: 1.5;
            color: var(--grey, #717171);
            margin: 0;
            max-width: 480px;
        }

        .image-wrapper {
            position: relative;
            width: 100%;
            margin: 28px 0;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .illustration {
            width: 100%;
            height: auto;
            max-height: 380px;
            object-fit: contain;
            border-radius: 16px;
        }

        .sidebar-footer {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 14px;
            color: var(--d-grey, #4d4d4d);
            padding-top: 12px;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .stat-item .star {
            color: var(--warning, #fbc02d);
            font-size: 16px;
        }

        .stat-divider {
            width: 4px;
            height: 4px;
            background-color: var(--grey-blue, #ABBED1);
            border-radius: 50%;
        }

        .stat-text strong {
            font-weight: 700;
            color: var(--secondary, #263238);
        }

        @media (max-width: 1024px) {
            .sidebar-container {
                padding: 24px;
            }

            .title {
                font-size: 26px;
            }

            .illustration {
                max-height: 280px;
            }
        }
    `
})
export class SidebarComponent {
    img = input.required<string>();
    title = 'Nexcent Sessão';
}

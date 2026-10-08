import { Component, input } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-session-layout',
    imports: [SidebarComponent],
    template: `
        <main class="page-container">
            <div class="container-wrapper content-wrapper">
                <section class="form-column">
                    <div class="form-content">
                        <ng-content />
                    </div>
                </section>

                <section class="sidebar-column">
                    <div class="sidebar-content">
                        <app-sidebar [img]="img()" />
                    </div>
                </section>
            </div>
        </main>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
            min-height: 100vh;
        }

        .page-container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            background-color: var(--white, #FFFFFF);
            box-sizing: border-box;
        }

        .container-wrapper,
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }

        .form-column {
            background-color: var(--white, #FFFFFF);
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 48px 32px;
            box-sizing: border-box;
            border-right: 1px solid rgba(0, 0, 0, 0.04);
        }

        .form-content {
            width: 100%;
            max-width: 440px;
            display: flex;
            flex-direction: column;
            margin: auto 0;
        }

        .sidebar-column {
            background-color: var(--silver, #F5F7FA);
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }

        .sidebar-content {
            width: 100%;
            max-width: 580px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        @media (max-width: 960px) {
            .container-wrapper,
            .content-wrapper {
                grid-template-columns: 1fr;
            }

            .sidebar-column {
                display: none;
            }

            .form-column {
                border-right: none;
                padding: 32px 20px;
            }
        }
    `
})
export class LayoutComponent {
    img = input.required<string>();
}

import { Routes } from "@angular/router";

import { HomePageComponent } from "./pages/home/home-page.component";
import { SignUpPageComponent } from "./pages/session/signup/signup-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'session',
        redirectTo: '',
        children: [
            {
                path: 'signup',
                component: SignUpPageComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const router: Routes = routes;


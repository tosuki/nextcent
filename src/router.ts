import { Routes } from "@angular/router";

import { HomePageComponent } from "./pages/home/home-page.component";
import { SignInPageComponent } from "./pages/session/signin/signin-page.component";
import { SignUpPageComponent } from "./pages/session/signup/signup-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'signin',
        component: SignInPageComponent
    },
    {
        path: 'login',
        redirectTo: 'signin'
    },
    {
        path: 'signup',
        component: SignUpPageComponent
    },
    {
        path: 'register',
        redirectTo: 'signup'
    },
    {
        path: 'session',
        children: [
            { path: 'signin', component: SignInPageComponent },
            { path: 'signup', component: SignUpPageComponent }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const router: Routes = routes;

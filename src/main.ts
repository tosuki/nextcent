import { bootstrapApplication } from '@angular/platform-browser';
import { inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { App } from "./app.component";
import { AuthService } from './services/auth.service';
import { routes } from './router';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      const authService = inject(AuthService);

      authService.initialize();

      return;
    })
  ]
})
  .catch((err) => console.error(err));

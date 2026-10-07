import { bootstrapApplication } from '@angular/platform-browser';
import { inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';

import { App } from "./app.component";
import { AuthService } from './services/auth.service';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => {
      const authService = inject(AuthService);

      authService.initialize();

      return;
    })
  ]
})
  .catch((err) => console.error(err));

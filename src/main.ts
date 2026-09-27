import { bootstrapApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners } from '@angular/core';

import { App } from "./app.component";

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners()
  ]
})
  .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withRouterConfig({})),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
}).catch((err) => console.error(err));

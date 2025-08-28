// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideForms } from '@angular/forms';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(), // Enables HttpClient in your services
    provideForms()       // Enables [(ngModel)] in forms
  ]
}).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideHttpClient()   // 👈 THIS is what makes HttpClient available everywhere
  ]
}).catch(err => console.error(err));
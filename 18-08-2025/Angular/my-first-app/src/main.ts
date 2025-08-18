import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ThirdcompComponent } from './app/thirdcomp/thirdcomp';

bootstrapApplication(ThirdcompComponent, appConfig)
  .catch(err => console.error(err));

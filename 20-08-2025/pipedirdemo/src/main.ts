import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Calendar } from './app/calendar/calendar';
import { Custompipe } from './app/custompipe/custompipe';

import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Home } from './app/ex-1-home/home';
import { App } from './app/app';
import { Ex3 } from './app/ex-3/ex-3';
import { Ex4 } from './app/ex-4/ex-4';
import { Fruit } from './app/fruit';
import { FormSubmittedEvent } from '@angular/forms';

bootstrapApplication(Home, appConfig)
  .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {Condicomp} from './app/condicomp/condicomp';
import {  HomeComponent } from './app/home/home';
import { Switchdemo } from './app/switchdemo/switchdemo';

bootstrapApplication(Switchdemo, appConfig)
  .catch((err) => console.error(err));

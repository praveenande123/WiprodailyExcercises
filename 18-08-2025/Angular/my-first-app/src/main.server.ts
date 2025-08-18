import { bootstrapApplication } from '@angular/platform-browser';
import {ThirdcompComponent } from './app/thirdcomp/thirdcomp';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ThirdcompComponent, config);

export default bootstrap;

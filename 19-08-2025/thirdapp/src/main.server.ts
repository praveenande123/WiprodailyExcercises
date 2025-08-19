import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Home } from './app/ex-1-home/home';
import { Ex3 } from './app/ex-3/ex-3';
import { Ex4 } from './app/ex-4/ex-4';

const bootstrap = () => bootstrapApplication(Home, config);

export default bootstrap;

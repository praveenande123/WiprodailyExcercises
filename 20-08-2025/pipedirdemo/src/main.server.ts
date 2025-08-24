import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Calendar } from './app/calendar/calendar';
import { Custompipe } from './app/custompipe/custompipe';


const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;

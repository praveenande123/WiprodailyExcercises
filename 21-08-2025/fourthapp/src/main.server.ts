import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { VehicleComp } from './app/vehicle-comp/vehicle-comp';

const bootstrap = () => bootstrapApplication(VehicleComp, config);

export default bootstrap;

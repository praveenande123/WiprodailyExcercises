import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { HomeComponent } from './app/home/home';
import { Switchdemo } from './app/switchdemo/switchdemo';
import { SearchFilter } from './app/search-filter/search-filter';


const bootstrap = () => bootstrapApplication(SearchFilter,config);

export default bootstrap;

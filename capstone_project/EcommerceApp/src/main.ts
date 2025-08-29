import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { DemoAngularMaterials } from './app/DemoAngularMaterials';
import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(App, {
  providers: [BrowserModule,
    provideRouter(routes) ,
    importProvidersFrom(DemoAngularMaterials)  
  ]
}).catch(err => console.error(err));

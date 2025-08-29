import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { DemoAngularMaterials } from './DemoAngularMaterials';
import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoAngularMaterials,
    routingComponents
  ],
  providers: [],
  bootstrap: [AppModule] 
})
export class AppModule {}

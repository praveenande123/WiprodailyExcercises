import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoAngularMaterials } from './DemoAngularMaterials';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    DemoAngularMaterials
  ],
  templateUrl: './app.html'
})
export class App {}

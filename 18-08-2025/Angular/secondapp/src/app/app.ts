import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SearchFilter } from './search-filter/search-filter';

@Component({
  selector: 'app-root',
 imports: [SearchFilter], // <-- Add it here
  template: `
    <main>
      <app-search-filter></app-search-filter>
    </main>
  `,
  
  templateUrl: './app.html',
  styleUrl: './app.css'
 
})
export class App {
name: string = '';


greet(){
  alert('Hello'+' ' +this.name);

 }
}


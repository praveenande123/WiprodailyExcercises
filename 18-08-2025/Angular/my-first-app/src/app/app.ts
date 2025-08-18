import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondcompComponent } from "./secondcomp/secondcomp";

@Component({
  selector: 'app-root',
 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}

import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Calendar } from "./calendar/calendar";
import { BrowserModule } from '@angular/platform-browser';
import { CtofPipe } from './ctof-pipe';
import { Custompipe } from "./custompipe/custompipe";
import { StrkthruDirective } from './strkthru';




@Component({
  selector: 'app-root',
  imports: [FormsModule,StrkthruDirective ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // inputText: string = '';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtofPipe } from '../ctof-pipe';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-custompipe',
  imports: [CtofPipe, FormsModule,CommonModule],
  templateUrl: './custompipe.html',
  styleUrl: './custompipe.css'
})
export class Custompipe {
  celsius: number | null = null;
}


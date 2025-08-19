import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-4',
  imports: [CommonModule],
  templateUrl: './ex-4.html',
  styleUrl: './ex-4.css'
})
export class Ex4 {
color = 'blue';
  bgColor = 'yellow';
}


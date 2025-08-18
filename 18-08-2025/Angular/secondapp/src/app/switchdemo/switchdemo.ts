import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  imports: [CommonModule],
  templateUrl: './switchdemo.html',
  styleUrl: './switchdemo.css'
})
export class Switchdemo {
selectedColor: string = 'black';

onColorChange(color: string) {
  this.selectedColor = color;
}
}
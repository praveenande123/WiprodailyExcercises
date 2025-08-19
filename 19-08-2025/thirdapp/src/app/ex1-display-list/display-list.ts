import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Fruit } from '../fruit' // Adjust the import path as necessary
@Component({
  selector: 'app-display-list',
  imports: [CommonModule],
  templateUrl: './display-list.html',
  styleUrl: './display-list.css'
})
export class DisplayList {
  //   fruits = [
  //   { name: 'Apple', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop', description: 'A sweet red fruit rich in fiber and vitamin C.' },
    
  //   { name: 'Pomegranate', image: 'https://images.unsplash.com/photo-1437750769465-301382cdf094?w=400&h=300&fit=crop', description: 'A red juicy fruit with seeds on its skin.' },
  //   { name: 'Blueberries', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop', description: 'A tropical fruit with a sweet and tangy taste.' },
  // ];
// @Input() fruits: Fruit[] = [];

// }   
@Input() fruits: Fruit[] = [];
  @Output() fruitRemoved = new EventEmitter<number>();

  removeFruit(index: number) {
    this.fruitRemoved.emit(index);  // 👈 send index to parent
  }
}
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DisplayList } from '../ex1-display-list/display-list';
import { FormsModule } from '@angular/forms';
import { Fruit } from '../fruit'   // 👈 correct path



@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, DisplayList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fruits: Fruit[] = [
    { name: 'Apple', image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', description: 'Fresh and juicy apple.' },
    { name: 'Banana', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', description: 'A healthy banana.' },
    { name: 'Orange', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg', description: 'Citrus fruit full of vitamin C.' },
    { name: 'Strawberry', image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg', description: 'Sweet and fresh strawberry.' },
    { name: 'Mango', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg', description: 'The king of fruits.' },
    { name: 'Pineapple', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg', description: 'Tropical and tangy pineapple.' },
    { name: 'Kiwi', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg', description: 'Exotic kiwi fruit.' }
  ];

  onFruitRemoved(index: number) {
    this.fruits.splice(index, 1);  // 👈 remove that fruit
  }
}
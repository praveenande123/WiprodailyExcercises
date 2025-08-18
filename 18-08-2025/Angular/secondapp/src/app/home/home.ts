import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  books: Book[] = [];

  constructor() {
    // Generate 20 sample books
    for (let i = 1; i <= 20; i++) {
      this.books.push({
        title: `Book Title ${i}`,
        description: `This is a brief description of Book ${i}.`,
        imageUrl: `https://via.placeholder.com/150?text=Book+${i}` // placeholder image
      });
    }
  }
}

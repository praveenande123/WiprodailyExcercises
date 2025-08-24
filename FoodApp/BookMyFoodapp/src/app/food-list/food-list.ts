import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../food.service';
import { Food } from '../food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Food Menu</h2>
    <div *ngFor="let food of foods" style="border:1px solid #ccc; margin:8px; padding:8px;">
      <h3>{{ food.name }}</h3>
      <p>{{ food.description }}</p>
      <p>Price: {{ food.price }} $</p>
      <button (click)="addToCart(food)">Add to Cart</button>
    </div>
  `,
  styles: [`
    h2 { color: darkblue; }
    button { background: green; color: white; padding: 6px 12px; border: none; }
  `]
})
export class FoodList {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = this.foodService.getFoods();
  }

  addToCart(food: Food) {
    this.foodService.addToCart(food);
  }
}

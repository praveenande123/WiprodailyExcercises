import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FoodService, Food } from '../food.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
   <h2>🛒 Your Cart</h2>
<ng-container *ngIf="cart$ | async as cartItems">
  <div *ngIf="cartItems.length === 0">Cart is empty</div>
  <div *ngFor="let item of cartItems" style="border:1px solid #ccc; margin:8px; padding:8px;">
    <h3>{{ item.name }}</h3>
    <p>Price: {{ item.price }} $</p>
    <button (click)="removeFromCart(item)">Remove</button>
  </div>
  <h3 *ngIf="cartItems.length > 0">Total: {{ getTotal() }} $</h3>
</ng-container>
  `,
  styles: [`
    h2 { color: darkred; }
    button { background: crimson; color: white; padding: 6px 12px; border: none; }
  `]
})
export class Cart implements OnInit {
  cart$!: Observable<Food[]>;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.cart$ = this.foodService.cart$;
  }

  getTotal(): number {
    const currentCart = this.foodService.cartSubject.getValue();
    return currentCart.reduce((sum: number, item: Food) => sum + item.price, 0);
  }

  removeFromCart(item: Food): void {
    this.foodService.removeFromCart(item);
  }
}
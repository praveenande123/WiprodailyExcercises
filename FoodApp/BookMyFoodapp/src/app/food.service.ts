import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; // <-- Import BehaviorSubject and Observable

export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods: Food[] = [
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Burger', description: 'Tasty and juicy', price: 8, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Pasta', description: 'Italian specialty', price: 12, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Salad', description: 'Fresh and healthy', price: 6, image: 'https://via.placeholder.com/150' }
  ];

  // Use a BehaviorSubject for reactive cart updates
  public cartSubject = new BehaviorSubject<Food[]>([]);
  public cart$: Observable<Food[]> = this.cartSubject.asObservable(); // <-- Observable stream for components

  // Get all food items
  getFoods(): Food[] {
    return this.foods;
  }

  // Add a food item to the cart
  addToCart(food: Food): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = [...currentCart, food];
    this.cartSubject.next(updatedCart); // <-- Push the updated cart to the stream
  }

  // Remove a food item from the cart
  removeFromCart(food: Food): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(f => f.id !== food.id);
    this.cartSubject.next(updatedCart);
  }

  // Clear the cart (optional)
  clearCart(): void {
    this.cartSubject.next([]);
  }
}
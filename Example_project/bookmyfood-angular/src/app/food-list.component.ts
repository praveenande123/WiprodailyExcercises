import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from './services';

@Component({
  standalone: true,
  selector: 'app-food-list',
  imports: [CommonModule],
  template: `
  <h2>Menu</h2>
  <div *ngFor="let f of items" style="display:flex; gap:8px; align-items:center">
    <div style="width:200px">{{f.name}}</div>
    <div>₹ {{f.price}}</div>
    <button (click)="add(f)">Add</button>
  </div>
  `
})
export class FoodListComponent {
  items: any[] = [];
  fs = inject(FoodService);
  ngOnInit(){ this.fs.list().subscribe(d => this.items = d); }
  add(f:any){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]'); cart.push({foodItemId: f.id, qty: 1}); localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  }
}

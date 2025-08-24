import { Component } from '@angular/core';
import { OrderService } from './services';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  template: `
    <h2>Cart</h2>
    <pre>{{ cart | json }}</pre>
    <button (click)="checkout()">Checkout</button>
  `
})
export class CartComponent {
  os = inject(OrderService);
  cart = JSON.parse(localStorage.getItem('cart') || '[]');
  checkout(){
    this.os.create(this.cart).subscribe((res:any)=>{
      alert('Order created: ' + res.orderId + ' status=' + res.status);
      localStorage.removeItem('cart');
    });
  }
}

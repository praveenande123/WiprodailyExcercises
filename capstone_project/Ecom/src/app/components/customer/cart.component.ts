
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { CartItem } from '../../models/order.model';

@Component({ selector: 'app-cart', templateUrl: './cart.component.html' })
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  constructor(private cart: CartService, private orders: OrderService, private auth: AuthService){}
  ngOnInit(){ this.refresh(); }
  refresh(){ this.cart.view(this.auth.user?.id || 0).subscribe(i => this.items = i); }
  remove(item: CartItem){ this.cart.remove(item.id!).subscribe(()=> this.refresh()); }
  update(item: CartItem){ this.cart.update(item.product.id, item.quantity).subscribe(()=> this.refresh()); }
  checkout(){ const order = { items: this.items }; this.orders.create(order).subscribe(()=> { this.items = []; }); }
  get total(){ return this.items.reduce((s,i)=> s + i.product.price * i.quantity, 0); }
}

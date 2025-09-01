
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order.model';

@Component({ selector: 'app-order-list', templateUrl: './order-list.component.html' })
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  constructor(private service: OrderService, private auth: AuthService){}
  ngOnInit(){ this.service.listByUser(this.auth.user?.id || 0).subscribe(o => this.orders = o); }
}

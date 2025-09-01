
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({ selector: 'app-order-detail', templateUrl: './order-detail.component.html' })
export class OrderDetailComponent implements OnInit {
  order?: Order;
  constructor(private route: ActivatedRoute, private service: OrderService){}
  ngOnInit(){ const id = +(this.route.snapshot.paramMap.get('id')||0); this.service.detail(id).subscribe(o => this.order = o); }
}

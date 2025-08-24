import { Component, inject } from '@angular/core';
import { OrderService } from './services';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-orders',
  imports: [CommonModule],
  template: `
    <h2>My Orders</h2>
    <pre>{{ orders | json }}</pre>
  `
})
export class OrdersComponent {
  os = inject(OrderService);
  orders:any[] = [];
  ngOnInit(){ this.os.mine().subscribe(d => this.orders = d); }
}

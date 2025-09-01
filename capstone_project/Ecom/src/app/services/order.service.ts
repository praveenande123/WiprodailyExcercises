
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}
  create(order: Partial<Order>){ return this.http.post<Order>(`${environment.orderApi}/order`, order); }
  cancel(orderId:number){ return this.http.put(`${environment.orderApi}/order/${orderId}`, {}); }
  list(){ return this.http.get<Order[]>(`${environment.orderApi}/order`); }
  listByUser(userId:number){ return this.http.get<Order[]>(`${environment.orderApi}/order/${userId}`); }
  detail(orderId:number){ return this.http.get<Order>(`${environment.orderApi}/order/${orderId}`); }
}

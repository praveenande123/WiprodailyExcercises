
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CartItem } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient) {}
  add(userId:number, productId:number, quantity:number){
    return this.http.post(`${environment.orderApi}/cart/addProd`, { userId, productId, quantity });
  }
  remove(itemId:number){
    return this.http.delete(`${environment.orderApi}/cart/deleteProd/${itemId}`);
  }
  update(productId:number, quantity:number){
    return this.http.put(`${environment.orderApi}/cart/update`, { productId, quantity });
  }
  view(userId:number){
    return this.http.get<CartItem[]>(`${environment.orderApi}/cart/${userId}`);
  }
}

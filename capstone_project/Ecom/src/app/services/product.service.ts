
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  list(){ return this.http.get<Product[]>(`${environment.productApi}/product`); }
  get(id: number){ return this.http.get<Product>(`${environment.productApi}/product/${id}`); }
  create(p: Product){ return this.http.post<Product>(`${environment.productApi}/product`, p); }
  update(p: Product){ return this.http.put<Product>(`${environment.productApi}/product`, p); }
  delete(id: number){ return this.http.delete<void>(`${environment.productApi}/product/${id}`); }
}

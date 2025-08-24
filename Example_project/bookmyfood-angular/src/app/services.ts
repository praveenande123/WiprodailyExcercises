import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  login(username: string, password: string) {
    return this.http.post<{token:string, username:string, roles:string}>(`${API}/auth/login`, { username, password });
  }
}

@Injectable({ providedIn: 'root' })
export class FoodService {
  http = inject(HttpClient);
  list() { return this.http.get<any[]>('http://localhost:4200/foods'); }
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  http = inject(HttpClient);
  create(items: any[]) { return this.http.post(`${API}/order`, { items }); }
  mine() { return this.http.get<any[]>('http://localhost:4200/order'); }
}

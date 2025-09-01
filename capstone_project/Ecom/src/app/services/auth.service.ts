
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: User | null = null;
  constructor(private http: HttpClient, private router: Router) {
    const raw = localStorage.getItem('user'); if (raw) this._user = JSON.parse(raw);
  }
  get user(){ return this._user; }
  isLoggedIn(){ return !!this._user?.token; }
  isAdmin(){ return this._user?.role === 'ADMIN'; }
  isCustomer(){ return this._user?.role === 'CUSTOMER'; }

  login(email: string, password: string){
    return this.http.post<User>(`${environment.userApi}/user/login`, { email, password });
  }
  register(payload: Partial<User>){
    return this.http.post<User>(`${environment.userApi}/user`, payload);
  }
  setUser(u: User){ this._user = u; localStorage.setItem('user', JSON.stringify(u)); }
  logout(){ this._user = null; localStorage.removeItem('user'); this.router.navigate(['/login']); }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <nav style="display:flex; gap:12px; padding:12px; background:#f4f4f4">
    <a routerLink="/">Food</a>
    <a routerLink="/cart">Cart</a>
    <a routerLink="/orders">My Orders</a>
    <span style="flex:1"></span>
    <a routerLink="/login">Login</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {}

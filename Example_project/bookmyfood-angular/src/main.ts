import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AuthInterceptor } from './app/auth.interceptor';

const routes: Routes = [
  { path: '', loadComponent: () => import('./app/food-list.component').then(m => m.FoodListComponent) },
  { path: 'login', loadComponent: () => import('./app/login.component').then(m => m.LoginComponent) },
  { path: 'cart', loadComponent: () => import('./app/cart.component').then(m => m.CartComponent) },
  { path: 'orders', loadComponent: () => import('./app/orders.component').then(m => m.OrdersComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideRouter(routes)
  ]
}).catch(console.error);

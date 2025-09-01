
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { ProductListComponent } from './components/admin/product-list.component';
import { ProductFormComponent } from './components/admin/product-form.component';
import { ProductCatalogComponent } from './components/customer/product-catalog.component';
import { CartComponent } from './components/customer/cart.component';
import { OrderListComponent } from './components/customer/order-list.component';
import { OrderDetailComponent } from './components/customer/order-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: ProductCatalogComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], data: { roles: ['CUSTOMER'] } },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard], data: { roles: ['CUSTOMER'] } },
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [AuthGuard], data: { roles: ['CUSTOMER'] } },
  { path: 'admin/products', component: ProductListComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { ProductListComponent } from './components/admin/product-list.component';
import { ProductFormComponent } from './components/admin/product-form.component';
import { ProductCatalogComponent } from './components/customer/product-catalog.component';
import { CartComponent } from './components/customer/cart.component';
import { OrderListComponent } from './components/customer/order-list.component';
import { OrderDetailComponent } from './components/customer/order-detail.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductCatalogComponent,
    CartComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}


import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product.model';

@Component({ selector: 'app-product-catalog', templateUrl: './product-catalog.component.html' })
export class ProductCatalogComponent implements OnInit {
  products: Product[] = []; qty: {[id:number]: number} = {};
  constructor(private productService: ProductService, private cart: CartService, public auth: AuthService){}
  ngOnInit(){ this.productService.list().subscribe(p => this.products = p); }
  add(p: Product){
    const q = this.qty[p.id!] || 1;
    const userId = this.auth.user?.id || 0;
    this.cart.add(userId, p.id!, q).subscribe();
  }
}

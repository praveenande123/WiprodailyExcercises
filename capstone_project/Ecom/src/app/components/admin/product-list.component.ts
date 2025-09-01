
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({ selector: 'app-product-list', templateUrl: './product-list.component.html' })
export class ProductListComponent implements OnInit {
  products: Product[] = []; loading = true;
  constructor(private productService: ProductService, private router: Router){}
  ngOnInit(){ this.reload(); }
  reload(){ this.productService.list().subscribe(p => { this.products = p; this.loading = false; }); }
  edit(p: Product){ this.router.navigate(['/admin/products', p.id]); }
  remove(p: Product){ if(!confirm('Delete product?')) return; this.productService.delete(p.id!).subscribe(()=>this.reload()); }
  addNew(){ this.router.navigate(['/admin/products/new']); }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({ selector: 'app-product-form', templateUrl: './product-form.component.html' })
export class ProductFormComponent implements OnInit {
  id?: number; loading = false; title = 'New Product';
  form = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    description: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    quantity: [0, [Validators.required, Validators.min(0)]]
  });
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: ProductService, private router: Router){}
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id && id !== 'new'){ this.id = +id; this.title = 'Edit Product'; this.service.get(this.id).subscribe(p => this.form.patchValue(p)); }
  }
  save(){
    const p = this.form.value as Product;
    const call = p.id ? this.service.update(p) : this.service.create(p);
    call.subscribe(()=> this.router.navigate(['/admin/products']));
  }
}

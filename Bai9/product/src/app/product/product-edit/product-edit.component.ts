import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    productForm: FormGroup;
    id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute
              ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduc(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit() {
  }
  getProduc(id: number) {
    return this.productService.findById(id);
  }
  update(id: number) {
    const product = this.productForm.value;
    this.productService.update(id, product);
    alert('Update product successfully!');
  }

}

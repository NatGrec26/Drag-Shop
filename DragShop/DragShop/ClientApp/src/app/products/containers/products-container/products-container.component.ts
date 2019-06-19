import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductAll } from '../../models/products-all.interface';
export interface Product {
  name: String;
  price: number;
  img: String;
}

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})

export class ProductsContainerComponent implements OnInit {
  productsAll: ProductAll[];
  constructor(private produtsServices: ProductService) { }

  ngOnInit() {
    this.initForm();
    this.loadproduct();
  }
  loadproduct() {
    this.produtsServices
      .getProduct()
      .subscribe(
        data => (this.productsAll = data)
      );
  }

  initForm() {
    //  this.contactForm = this.contactFormService.initForm();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductAll } from '../products/models/products-all.interface';
import { ProductService } from '../products/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent implements OnInit {
  productsAll: ProductAll[];
  constructor(config: NgbCarouselConfig, private produtsServices: ProductService) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  ngOnInit() {
    this.loadproduct();
  }
  loadproduct() {
    this.produtsServices
      .getProductHome()
      .subscribe(
        data => (this.productsAll = data)
      );
  }
}

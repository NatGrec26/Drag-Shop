import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export interface  Product {
  name:String;
price:number;
img:String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  
})



export class HomeComponent {
  
  product1: Product = {
    name : 'Paleta de contorno',
    price : 9000,
    img: 'assets/img-products/Contour.png'
  }
  
  
  product2:  Product = {
    name : 'Pestañas',
    price : 4000,
    img: 'assets/img-products/EyeLashes.png'
  }
  
  product3:  Product = {
    name : 'Leotardo',
    price : 10000,
    img: 'assets/img-products/Leothard.png'
  }
  
  product4:  Product = {
    name : 'Paleta de sombras',
    price : 7000,
    img: 'assets/img-products/Shadows.png'
  }
  
  product5:  Product = {
    name : 'Peluca',
    price : 5000,
    img: 'assets/img-products/Wig.png'
  }
  

  products: Array<Product> = [this.product1, this.product2, this.product3, this.product4, this.product5];
 

 // images = [0,1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}

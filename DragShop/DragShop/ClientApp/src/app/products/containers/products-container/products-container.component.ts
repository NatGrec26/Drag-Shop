import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
//import { ContactFormService } from '../../services/contact-form.component';
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
  //contactForm: FormGroup;
  constructor(/*private contactFormService: ContactFormService*/) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    //  this.contactForm = this.contactFormService.initForm();
  }

  

    product1: Product = {
      name: 'Paleta de contorno',
      price: 9000,
      img: 'assets/products/Contour/Contour.png'
    }
  
  
    product2: Product = {
      name: 'Pestañas',
      price: 4000,
      img: 'assets/products/Eyelashes/Eyelashes.png'
    }
  
    product3: Product = {
      name: 'Leotardo',
      price: 10000,
      img: 'assets/products/Leothard/Leothard.png'
    }
  
    product4: Product = {
      name: 'Paleta de sombras',
      price: 7000,
      img: 'assets/products/Shadows/Shadows.png'
    }
  
    product5: Product = {
      name: 'Peluca',
      price: 5000,
      img: 'assets/products/Wig/Wig.png'
    }
  
    product6: Product = {
      name: 'Boa de plumas',
      price: 1500,
      img: 'assets/products/Boa/Boa.png'
    }
  
    product7: Product = {
      name: 'Pechos de silicona',
      price: 24000,
      img: 'assets/products/Breast/Breast.png'
    }
  
    product8: Product = {
      name: 'Brochas',
      price: 3000,
      img: 'assets/products/Brush/Brush.png'
    }
  
    product9: Product = {
      name: 'Crema hidratante',
      price: 2500,
      img: 'assets/products/Cream/Cream.png'
    }
  
    product10: Product = {
      name: 'Esmalte para uñas',
      price: 1000,
      img: 'assets/products/Nailpolish/Nailpolish.png'
    }
  
    produc11: Product = {
      name: 'Uñas postizas',
      price: 1200,
      img: 'assets/products/Nails/Nails.png'
    }
  
    product12: Product = {
      name: 'Collar',
      price: 7000,
      img: 'assets/products/Necklacke/Necklacke.png'
    }
  
    product13: Product = {
      name: 'Fragancia seducción',
      price: 12000,
      img: 'assets/products/Perfum/Perfum.png'
    }
  
    product14: Product = {
      name: 'Zapatos de tacón',
      price: 8000,
      img: 'assets/products/Shoes/Shoes.png'
    }
  
    product15: Product = {
      name: 'Relleno para caderas',
      price: 6000,
      img: 'assets/products/Sponge/Sponge.png'
    }
    products: Array<Product> = [this.product1, this.product2, this.product3, this.product4, this.product5,
    this.product6, this.product7, this.product8, this.product9, this.product10,
    this.produc11, this.product12, this.product13, this.product14, this.product15];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-product-container',
  templateUrl: './description-product-container.component.html',
  styleUrls: ['./description-product-container.component.css']
})
export class DescriptionProductContainerComponent implements OnInit {

  public currentQuantity = 1;
  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.currentQuantity++;
  }
  less() {
    if (this.currentQuantity > 1) {
      this.currentQuantity--;
    }
  }
}

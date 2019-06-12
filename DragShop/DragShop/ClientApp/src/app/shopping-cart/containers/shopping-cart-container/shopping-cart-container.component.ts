import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shopping-cart-container',
    templateUrl: './shopping-cart-container.component.html',
    styleUrls: ['./shopping-cart-container.component.css']
})
export class ShoppingCartContainerComponent implements OnInit {
    subtotal = 0;
    totalProducts = 0;

    constructor(
    ) { }

    ngOnInit() {
    }

}
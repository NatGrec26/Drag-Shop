import { Observable } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';
import { ShoppingDetail } from '../../../store/shopping-cart/models/shopping-detail.interface';
import { ShoppingList } from '../../../store/shopping-cart/models/shopping-list.interface';
import { PictureShop } from '../../models/picture-shop.interface';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    public currentQuantity = 50;
    public subtotal = 0;
    @Output() sumItem = new EventEmitter<object>();
    @Output() restItem = new EventEmitter<object>();
    @Output() removeItem = new EventEmitter<object>();
    @Input() shoppingDetails$: Observable<ShoppingList>;
    @Input() dataPictureProduct: PictureShop;
   


    constructor() { }

    ngOnInit() {
    }
    
    sumQuantity(productDeatil: ShoppingDetail) {
        this.sumItem.emit(productDeatil);
      }
    
      restQuantity(productDeatil: ShoppingDetail) {
        this.restItem.emit(productDeatil);
      }
      removeDetail(productDeatil: ShoppingDetail) {
        this.removeItem.emit(productDeatil);
      }
}


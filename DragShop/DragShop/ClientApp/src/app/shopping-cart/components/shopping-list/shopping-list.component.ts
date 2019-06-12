import { Observable } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';

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

    constructor() { }

    ngOnInit() {
    }

    sumQuantity() {

    }

    restQuantity() {

    }
    removeDetail() {

    }
}

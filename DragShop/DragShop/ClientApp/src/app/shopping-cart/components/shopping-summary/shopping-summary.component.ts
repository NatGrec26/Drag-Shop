import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { ShoppingList } from '../../../store/shopping-cart/models/shopping-list.interface';

@Component({
    selector: 'app-shopping-summary',
    templateUrl: './shopping-summary.component.html',
    styleUrls: ['./shopping-summary.component.css']
})
export class ShoppingSummaryComponent implements OnInit {
    @Output() childSubmit = new EventEmitter<object>();
    @Input() shoppingDetails$: Observable<ShoppingList>;
    
    constructor() { }

    ngOnInit() {
    }

}
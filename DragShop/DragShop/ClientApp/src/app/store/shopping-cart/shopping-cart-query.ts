import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ShoppingCartStore, ShoppingCartState } from './shopping-cart-store';
import { ShoppingList } from './models/shopping-list.interface';

@Injectable()
export class ShoppingCartQuery extends QueryEntity<ShoppingCartState, ShoppingList> {
  constructor(protected store: ShoppingCartStore) {
    super(store);
  }
}

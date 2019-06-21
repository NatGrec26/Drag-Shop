import { Injectable } from '@angular/core';
import { ID, update } from '@datorama/akita';
import { ShoppingCartStore } from './../shopping-cart-store';
import { ShoppingDetail, recalculateShoppingDetailQuantities } from './../models/shopping-detail.interface';
import { ShoppingCartQuery } from './../shopping-cart-query';
// tslint:disable-next-line:max-line-length
import { ShoppingList, createShoppingList, recalculateShoppingListQuantities } from './../models/shopping-list.interface';
import { ValidatePointS } from '../../../checkout//models/validatePointS.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(
    private shoppingCartStore: ShoppingCartStore,
    private shoppingCartQuery: ShoppingCartQuery,
  ) {
  }

  addList(list: ShoppingList) {
    this.shoppingCartStore.add(list);
  }

  removeList() {
    this.shoppingCartStore.remove(this.shoppingCartQuery.getActiveId());
  }

  addElement(item: ShoppingDetail) {
   const currentList = this.shoppingCartQuery.getActive();
      if (!currentList) {
      const list = this.updateShoppingListDetails(createShoppingList(), [item]);
      this.addList(list);
      this.selectList(list.id);
    } else {
      const existing = this.getExistingItem(item, currentList);
      if (existing) {
        this.updateQuatity(existing.id, 'sumExist', item.quantity);
      } else {
        this.shoppingCartStore.updateActive(list => {
          return this.updateShoppingListDetails(list, [...list.orderDetails, item]);
        });
      }
    }
  }

  getExistingItem(item: ShoppingDetail, list: ShoppingList) {
    return list.orderDetails.find(detail =>
      detail.productID === item.productID);
  }

  updateQuatity(id: ID, action: string, updateQuantity: number) {
    // tslint:disable-next-line:prefer-const
    let quantity: number;
    const currentList = this.shoppingCartQuery.getActive();
    const orderDetails = currentList.orderDetails;
    const changedList = orderDetails.map(function (item) {
      quantity = item.quantity;
    if ( action === 'sumExist') {
      quantity += updateQuantity;
    } else if (action === 'sum') {
      quantity++;
    } else {
      if (quantity > 1) {
        quantity--;
      }
      }
      if (item.id === id) {
        return recalculateShoppingDetailQuantities({
          ...item,
          quantity
        });
      }
      return item;
    });

    this.shoppingCartStore.updateActive(list => {
      return this.updateShoppingListDetails(list, changedList);
    });

  }


 /* updateQuatitytwo(id: number, quantity: number) {
    // tslint:disable-next-line:prefer-const
    const currentList = this.shoppingCartQuery.getActive();
    const orderDetails = currentList.orderDetails;
    const changedList = orderDetails.map(function (item) {
      if (item.productId === id) {
        return recalculateShoppingDetailQuantities({
          ...item,
          quantity: quantity
        });
      }
      return item;
    });

    this.shoppingCartStore.updateActive(list => {
      return this.updateShoppingListDetails(list, changedList);
    });

  }*/
  updateQuatitytwo(points: ValidatePointS[]) {
    // tslint:disable-next-line:prefer-const
    const currentList = this.shoppingCartQuery.getActive();
    const orderDetails = currentList.orderDetails;
    const changedList = orderDetails.map(function (item) {
      const foundOutOfStock = points.find(e => e.productId === item.productID);
      if (foundOutOfStock) {
        return recalculateShoppingDetailQuantities({
          ...item,
          quantity: foundOutOfStock.quantity
        });
      }
      return item;
    });

    this.shoppingCartStore.updateActive(list => {
      return this.updateShoppingListDetails(list, changedList);
    });

  }


  selectList(id: ID) {
    this.shoppingCartStore.setActive(id);
  }

  deleteList(id: ID) {
    this.shoppingCartStore.remove(id);
  }
  removeItem(id: ID) {
    const currentList = this.shoppingCartQuery.getActive();
    const orderDetails = currentList.orderDetails;
    const changedList = orderDetails.filter(function (item) {
      return item.id !== id;
    });
    if (orderDetails.length === 1) {
      this.removeList();
    } else {
      this.shoppingCartStore.updateActive(list => {
        return this.updateShoppingListDetails(list, changedList);
      });
    }
  }

  updateShoppingListDetails(list: ShoppingList, orderDetails: ShoppingDetail[]): ShoppingList {
    return recalculateShoppingListQuantities({
      ...list,
      orderDetails
    });
  }
}

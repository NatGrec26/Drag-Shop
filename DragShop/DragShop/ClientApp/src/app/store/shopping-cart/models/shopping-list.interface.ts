
import { ID, guid } from '@datorama/akita';

import { ShoppingDetail } from './shopping-detail.interface';

export interface ShoppingList {
  id: ID;
  name: string;
  date: number | Date;
  subtotal: number;
  totalProducts: number;
  orderDetails: ShoppingDetail[];
}

export function createShoppingList(name: string = 'Shopping List'): ShoppingList {
  return {
    id: guid(),
    name,
    date: new Date(),
    orderDetails: [],
    subtotal: 0,
    totalProducts: 0
  };
}

export function recalculateShoppingListQuantities(list: ShoppingList): ShoppingList {
  return {
    ...list,
    subtotal: list.orderDetails.map(e => e.subtotal).reduce((prev = 0, next) => prev + next),
    totalProducts: list.orderDetails.map(e => e.quantity).reduce((prev = 0, next) => prev + next)
  };
}

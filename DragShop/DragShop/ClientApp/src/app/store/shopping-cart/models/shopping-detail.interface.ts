import { ID } from '@datorama/akita';

export interface ShoppingDetail {
  id: ID;
  name: string;
  description: string;
  lastPrice: number;
  productID: number;
  tutorial: string;
  state: string; 
  quantity: number;
  subtotal: number;

}

export function recalculateShoppingDetailQuantities(item: ShoppingDetail): ShoppingDetail {
  return {
    ...item,
    subtotal: item.quantity * item.lastPrice
  };
}

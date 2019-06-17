import { ID } from '@datorama/akita';

export interface ShoppingDetail {
  id: ID;
  name: string;
  valueAddress: string;
  description: string;
  price: number;
  productId: number;
  quantity: number;
  subtotal: number;

}

export function recalculateShoppingDetailQuantities(item: ShoppingDetail): ShoppingDetail {
  return {
    ...item,
    subtotal: item.quantity * item.price
  };
}

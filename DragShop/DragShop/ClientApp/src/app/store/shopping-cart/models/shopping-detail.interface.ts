import { ID } from '@datorama/akita';

export interface ShoppingDetail {
  id: ID;
  name: string;
  systemImageUrl: string;
  description: string;
  lastPrice: number;
  productID: number;
  tutorial: string;
  state: string; 
  quantity: number;
  subtotal: number;
  tax: number;
  sendingCost: number;
  taxInterface: number;
  sendingCostInterface: number;

}

export function recalculateShoppingDetailQuantities(item: ShoppingDetail): ShoppingDetail {
  return {
    ...item,
    subtotal: Math.round(((item.quantity * item.lastPrice) * item.tax ) + (item.quantity * item.lastPrice) + (item.sendingCost)),
    taxInterface: (item.quantity * item.lastPrice) * item.tax,
    sendingCostInterface: item.quantity * item.sendingCost,
  };
}

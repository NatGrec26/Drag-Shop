import { EntityState, EntityStore, StoreConfig,
  getInitialActiveState, ActiveState } from '@datorama/akita';

import { ShoppingList } from './models/shopping-list.interface';

export interface ShoppingCartState extends EntityState<ShoppingList>, ActiveState { }

const state = {
  ...getInitialActiveState()
};

@StoreConfig({ name: 'shoppingCart' })
export class ShoppingCartStore extends EntityStore<ShoppingCartState, ShoppingList> {
  constructor() {
    super(state);
  }
}

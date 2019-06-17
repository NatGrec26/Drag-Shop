//import { AuthorizationService } from './login/services/authorization.service';
import { ShoppingCartService } from './shopping-cart/services/shopping-cart-service';

//import { AuthorizationStore } from './login/authorization-store';
import { ShoppingCartStore } from './shopping-cart/shopping-cart-store';

// import { AuthorizationQuery } from './login/authorization-query';
import { ShoppingCartQuery } from './shopping-cart/shopping-cart-query';

export const services = [/*AuthorizationService,*/ ShoppingCartService];
export const stores = [/*AuthorizationStore, */ShoppingCartStore];
export const queries = [/*AuthorizationQuery,*/ ShoppingCartQuery];

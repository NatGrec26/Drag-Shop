import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './../../../store/shopping-cart/models/shopping-list.interface';
import { ShoppingCartQuery } from './../../../store/shopping-cart/shopping-cart-query';
import { ShoppingCartService as StoreShoppingCartService} from './../../../store/shopping-cart/services/shopping-cart-service';
import { ShoppingDetail } from '../../../store/shopping-cart/models/shopping-detail.interface';
import { ProductService } from '../../../products/services/product.service';
import { ProductHome } from '../../../products/models/products-home.interface';
import { PictureShop } from '../../models/picture-shop.interface';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
    selector: 'app-shopping-cart-container',
    templateUrl: './shopping-cart-container.component.html',
    styleUrls: ['./shopping-cart-container.component.css']
})
export class ShoppingCartContainerComponent implements OnInit {
    subtotal = 0;
    totalProducts = 0;
    dataProduct: ProductHome[] = null;
    orderDetailsActive: ShoppingDetail[] = null;
    dataPictureProduct: PictureShop = null;
    shoppingDetails$: Observable<ShoppingList>;

    constructor(
        private shoppingCartService: StoreShoppingCartService,
        private service: ProductService,
        private shoppingCartQuery: ShoppingCartQuery,
        private serviceShop: ShoppingCartService,
    ) { }

    ngOnInit() {
     // this.getProduct();
      this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
    }

    removeItem(orderDetail: ShoppingDetail) {
        this.shoppingCartService.removeItem(orderDetail.id);
      }

      sumQuantity(orderDetail: ShoppingDetail) {
        this.shoppingCartService.updateQuatity(orderDetail.id, 'sum', 0);
      }

      restQuantity(orderDetail: ShoppingDetail) {
        this.shoppingCartService.updateQuatity(orderDetail.id, 'rest', 0);
      }

      getProduct() {
        this.service.getProductsHome()
          .subscribe(
            dataProduct => {
              this.dataProduct = dataProduct;
            }
          );
      }

      
  getAllDataPicture() {
    this.orderDetailsActive = this.shoppingCartQuery.getActive().orderDetails;
    for (const order of this.orderDetailsActive) {
      this.getPictureProductShop(order.productID);
    }
  }

    getPictureProductShop(productId: number) {
    this.serviceShop.getPictureShop(productId)
      .subscribe(
        dataPictureProduct => {
          this.dataPictureProduct = dataPictureProduct;
        }
      );
  }
}
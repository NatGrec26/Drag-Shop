import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductHome } from '../../../products/models/products-home.interface';
import { SelectProduct } from '../../models/select-product.interface';
import { ProductIdService } from '../../services/product-id.service';
import { ExistingProduct } from '../../models/existing-product.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ShoppingList } from './../../../store/shopping-cart/models/shopping-list.interface';
import { ShoppingCartQuery } from './../../../store/shopping-cart/shopping-cart-query';
import { ShoppingCartService as StoreShoppingCartService } from './../../../store/shopping-cart/services/shopping-cart-service';
import { recalculateShoppingDetailQuantities } from '../../../store/shopping-cart/models/shopping-detail.interface';
import { guid } from '@datorama/akita';
import { createSuccessResponse } from '../../../utils/server-response-handler';
import {
    createGenericErrorResponse,
    createServerResponseHandler,
    handleDefaultHttpError,
    ServerResponseHandler
} from '../../../utils/server-response-handler';
import { NewProduct } from '../../models/new-product.interface';
import { DescriptionPictureService } from '../../services/description-picture.service';
import { Picture } from '../../models/picture.interface';
import { ProductDetailServices } from '../../services/product-detail.service';
import { Product } from '../../models/product.interface';
import { FormGroup } from '@angular/forms';
import { DescriptionProductItemFormService } from '../../services/description-product-item.services';
import { ProductService } from '../../../products/services/product.service';

@Component({
  selector: 'app-description-product-container',
  templateUrl: './description-product-container.component.html',
  styleUrls: ['./description-product-container.component.css']
})
export class DescriptionProductContainerComponent implements OnInit {
  public productId: number;
  picture: Picture[] = null;
  dataProduct: ProductHome[] = null;
  public existingData: ExistingProduct;
  serverResponseHandler: ServerResponseHandler;
  shoppingDetails$: Observable<ShoppingList>;
  data: Product = null;
  detailProductForm: FormGroup;
  dataSourceProfessor: ExistingProduct =
    {
      productName: 'Jhonny',
      productId: 2,
      priceValue: 1000000,
      valueAddress: 'Paniagua',
    };

  public currentQuantity = 1;
  constructor(
   private route: ActivatedRoute,
   private serviceProduct: ProductService,
   private serviceid: ProductIdService,
   private shoppingCartService: StoreShoppingCartService,
   private shoppingCartQuery: ShoppingCartQuery,
   private servicep: DescriptionPictureService,
   private serviced: ProductDetailServices,
   private productDetailItemFormService: DescriptionProductItemFormService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.productId = +this.route.snapshot.paramMap.get('value');
  }

  initForm() {
    this.detailProductForm = this.productDetailItemFormService.initForm();
  }


  getProduct() {
    this.serviceProduct.getProductsHome()
        .subscribe(
            dataProduct => {
                this.dataProduct = dataProduct;
            }
        );
  }
  getExistingProductSelect(value: SelectProduct) {
    this.serviceid.getExistingProduct(this.productId)
    .subscribe(
        existingData => {
            this.existingData = this.dataSourceProfessor;
            this.shoppingCartService.addElement(
                recalculateShoppingDetailQuantities({
                    id: guid(),
                    name: this.dataSourceProfessor.productName,
                    valueAddress: this.dataSourceProfessor.valueAddress,
                    quantity: value.quantity,
                    description: 'Order',
                    price: this.dataSourceProfessor.priceValue,
                    productId: this.dataSourceProfessor.productId,
                    subtotal: 0,
                })
            );
            this.serverResponseHandler = createSuccessResponse('Producto agregado al carrito de compras', null);
            this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
        },
        error => {
            if (error instanceof HttpErrorResponse) {
                this.handleHttpErrorMessage(error, ' error ');
            } else {
                this.serverResponseHandler = createGenericErrorResponse();
            }
        }
    );
// this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
}

 /* getExistingProductSelect(value: SelectProduct) {
    this.serviceid.getExistingProduct(this.productId)
    .subscribe(
        existingData => {
            this.existingData = existingData;
            this.shoppingCartService.addElement(
                recalculateShoppingDetailQuantities({
                    id: guid(),
                    name: existingData.productName,
                    valueAddress: existingData.valueAddress,
                    quantity: value.quantity,
                    description: 'Order',
                    price: existingData.priceValue,
                    productId: existingData.productId,
                    subtotal: 0,
                })
            );
            this.serverResponseHandler = createSuccessResponse('Producto agregado al carrito de compras', null);
            this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
        },
        error => {
            if (error instanceof HttpErrorResponse) {
                this.handleHttpErrorMessage(error, ' error ');
            } else {
                this.serverResponseHandler = createGenericErrorResponse();
            }
        }
    );
// this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
}
*/
onSubmitProduct() {
  this.getExistingProductSelect(this.detailProductForm.value);
  console.log(this.detailProductForm.value);
}

getBeneficted(productID: number) {
  this.serviced.getProduct(productID)
      .subscribe(
          data => {
              this.data = data;
          }, error => {
              if (error instanceof HttpErrorResponse) {
                  this.handleHttpErrorMessage(error, 'error');
              } else {
                  this.serverResponseHandler = createGenericErrorResponse();
              }
          }
      );
}

getPicture(benefictedId: number) {
  this.servicep.getPicture(benefictedId)
      .subscribe(
          picture => {
              this.picture = picture;
          }, error => {
              if (error instanceof HttpErrorResponse) {
                  this.handleHttpErrorMessage(error, 'error');
              } else {
                  this.serverResponseHandler = createGenericErrorResponse();
              }
          }
      );
}

  plus() {
    this.currentQuantity++;
  }
  less() {
    if (this.currentQuantity > 1) {
      this.currentQuantity--;
    }
  }


  handleHttpErrorMessage(httpErrorResponse: HttpErrorResponse, messagge: string) {
    if (httpErrorResponse.status === 404) {
        this.serverResponseHandler = createServerResponseHandler(messagge, false, httpErrorResponse.status, 'error');
    } else {
        this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
}
}
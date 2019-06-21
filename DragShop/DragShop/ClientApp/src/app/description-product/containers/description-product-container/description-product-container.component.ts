import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
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
import { ProductDetail } from '../../models/product-detail.interface';
import { ProductAll } from 'src/app/products/models/products-all.interface';

@Component({
    selector: 'app-description-product-container',
    templateUrl: './description-product-container.component.html',
    styleUrls: ['./description-product-container.component.css']
})

export class DescriptionProductContainerComponent implements OnInit {

    public productId: number;
    pictures: Picture[];
    picturesDeco: Picture[] = null;
    productDetail: ProductDetail;
    dataProduct: ProductHome[] = null;
    public existingData: ExistingProduct;
    serverResponseHandler: ServerResponseHandler;
    shoppingDetails$: Observable<ShoppingList>;
    data: Product = null;
    detailProductForm: FormGroup;
    productsAll: ProductAll[];

    public currentQuantity = 1;
    constructor(
        private route: ActivatedRoute,
        private serviceProduct: ProductService,
        private serviceid: ProductIdService,
        private shoppingCartService: StoreShoppingCartService,
        private shoppingCartQuery: ShoppingCartQuery,
        private servicePictures: DescriptionPictureService,
        private serviceDetail: ProductDetailServices,
        private productDetailItemFormService: DescriptionProductItemFormService,
        private produtsServices: ProductService,
        private routerLink:Router,
        private activeRoute: ActivatedRoute,
    ) { }
  
    ngOnInit() {
        // +this.route.snapshot.paramMap.get('value')
        this.activeRoute.paramMap.subscribe(routeParams => {
            this.loadData(routeParams);
        });
    }
    
    loadData(params: ParamMap) {
        this.initForm();
        this.productId = +params.get('value');
        this.getPicture(this.productId);
        this.getPicturesDeco(this.productId);
        this.getProductDetail(this.productId);
        this.loadproduct();
    }

    initForm() {
        this.detailProductForm = this.productDetailItemFormService.initForm();
    }

    getProductDetail(productId: number) {
        this.serviceDetail.getProducDetails(productId)
            .subscribe(
                productDetail => { this.productDetail = productDetail;
               });
    }
    
    getProduct() {
        this.serviceProduct.getProductsHome()
            .subscribe(
                dataProduct => {
                    this.dataProduct = dataProduct;
                }
            );
    }

    loadproduct() {
        this.produtsServices
          .getProductHome()
          .subscribe(
            data => (this.productsAll = data)
            
          );
    }

    getExistingProductSelect(value: SelectProduct) {

        this.serviceid.getExistingProduct(this.productId)
            .subscribe(
                existingData => {
                    this.existingData = existingData;
                    this.shoppingCartService.addElement(
                        recalculateShoppingDetailQuantities({
                            id: guid(),
                            name: existingData.name,
                            systemImageUrl: existingData.systemImageUrl,
                            description: existingData.description,
                            lastPrice: existingData.lastPrice,
                            state: existingData.state,
                            tutorial: existingData.tutorial,
                            productID: existingData.productID,
                            subtotal: 0,
                            taxInterface: 0,
                            sendingCostInterface: 0,
                            quantity: value.quantity,
                            tax: existingData.tax,
                            sendingCost: existingData.sendingCost
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

    onSubmitProduct() {
        // if (this.detailProductForm.value > 0) {
        this.getExistingProductSelect(this.detailProductForm.value);
        this.routerLink.navigate(['/shopping-cart']);
        // } else if (this.detailProductForm.value <= "") {
        //     alert("La cantidad debe ser superior a 0.");
        // }
    }

    getPicturesDeco(productId: number) {
        this.servicePictures.getPictureDeco(productId)
            .subscribe(
                picturesDeco => { this.picturesDeco = picturesDeco; });
    }


    getPicture(productId: number) {
        this.servicePictures.getPicture(productId)
            .subscribe(
                pictures => { this.pictures = pictures; });
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

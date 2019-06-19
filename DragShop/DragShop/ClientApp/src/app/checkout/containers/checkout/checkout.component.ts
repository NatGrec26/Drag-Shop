import {
  createGenericErrorResponse,
  createServerResponseHandler,
  handleDefaultHttpError,
  ServerResponseHandler,
  createdNotFoundErrorResponse
} from '../../../utils/server-response-handler';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CheckoutFormService } from '../../services/checkout-form.component';
import { Observable } from 'rxjs';
import { ShoppingList } from '../../../store/shopping-cart/models/shopping-list.interface';
import { ShoppingCartService } from '../../../store/shopping-cart/services/shopping-cart-service';
import { ShoppingCartQuery } from '../../../store/shopping-cart/shopping-cart-query';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  serverResponseHandler: ServerResponseHandler;
  checkoutForm: FormGroup;
   shoppingDetails$: Observable<ShoppingList>;
  constructor(
    private router: ActivatedRoute,
    private checkoutFormService: CheckoutFormService,
    private shoppingCartService: ShoppingCartService,
    private shoppingCartQuery: ShoppingCartQuery,
    private routerLink:Router
  ) { }
  
  ngOnInit() {
    this.initForm();
    this.shoppingDetails$ = this.shoppingCartQuery.selectActive();
  }

  initForm() {
    this.checkoutForm = this.checkoutFormService.initForm();
  }

  handleHttpErrorMessage(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.status === 400) {
     // this.serverResponseHandler = createServerResponseHandler(this.errorone, false, httpErrorResponse.status, 'error');
    } else {
      this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
  }

   cleanOrder(){
    this.shoppingCartService.removeList();
    alert("Su compra se realizó con éxito, muchas gracias por elegirnos.");
    this.routerLink.navigate(['/']);
   }


  handleHttpErrorMessageExpress(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.status === 404) {
      this.serverResponseHandler = createdNotFoundErrorResponse();
    } else if (httpErrorResponse.status === 400) {
      const error = httpErrorResponse.error;
      if (error.errorType === 'total_amount_incorrect') {
        this.serverResponseHandler = createServerResponseHandler(
          '', false, 400, 'error'
        );
      }  else if (error.errorType === 'more_than_max_counter') {
        this.serverResponseHandler = createServerResponseHandler(
          '', false, 400, 'error'
        );
      }
    } else {
      this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
  }
}

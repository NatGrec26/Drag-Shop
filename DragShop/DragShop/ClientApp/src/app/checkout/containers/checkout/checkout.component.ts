import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import {
  createGenericErrorResponse,
  createServerResponseHandler,
  handleDefaultHttpError,
  ServerResponseHandler,
  createdNotFoundErrorResponse
} from '../../../utils/server-response-handler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  serverResponseHandler: ServerResponseHandler;


  constructor(
    private router: ActivatedRoute,
  ) { }
  ngOnInit() {
  }


  


  handleHttpErrorMessage(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.status === 400) {
     // this.serverResponseHandler = createServerResponseHandler(this.errorone, false, httpErrorResponse.status, 'error');
    } else {
      this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
  }


  handleHttpErrorMessageExpress(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.status === 404) {
      this.serverResponseHandler = createdNotFoundErrorResponse();
    } else if (httpErrorResponse.status === 400) {
      const error = httpErrorResponse.error;
      if (error.errorType === 'total_amount_incorrect') {
        this.serverResponseHandler = createServerResponseHandler(
          'El total de la orden no supera los 6000 colones, debe ser un monto mayor para este servicio.', false, 400, 'error'
        );
      } else if (error.errorType === 'not_same_day') {
        this.serverResponseHandler = createServerResponseHandler(
          'El día del horario no coincide con el día de la fecha que selecciono.', false, 400, 'error'
        );
      } else if (error.errorType === 'cant_be_today') {
        this.serverResponseHandler = createServerResponseHandler(
          'Las entregas express no pueden ser para hoy mismo.', false, 400, 'error'
        );
      } else if (error.errorType === 'more_than_max_counter') {
        this.serverResponseHandler = createServerResponseHandler(
          'Disculpe, el horario y fecha seleccionado ya contiene el máximo de ordenes por entregar.', false, 400, 'error'
        );
      }
    } else {
      this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
  }
}

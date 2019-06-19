import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.component';
import { ContactService } from '../../services/contact.service';
import {
  createGenericErrorResponse,
  createServerResponseHandler,
  createSuccessResponse,
  handleDefaultHttpError,
  ServerResponseHandler,
  createdNotFoundErrorResponse
} from '../../../utils/server-response-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { SendEmail } from '../../models/send-email';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  contactForm: FormGroup;
  private sendEmailForm: SendEmail = {
    firstName: '',
    lastName: '',
    phoneNumber: 8475,
    email: '',
    message: ''
  };
  serverResponseHandler: ServerResponseHandler;
  constructor(
    private contactFormService: ContactFormService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.contactFormService.initForm();
  }

  chargeData() {
    this.sendEmailForm.email = this.contactForm.controls.email.value;
    this.sendEmailForm.firstName = this.contactForm.controls.firstName.value;
    this.sendEmailForm.lastName = this.contactForm.controls.lastName.value;
    this.sendEmailForm.phoneNumber = this.contactForm.controls.phoneNumber.value;
    this.sendEmailForm.message = this.contactForm.controls.message.value;
  }
  sendEmail() {
    this.chargeData();
    this.contactService.sendEmailCustomer(this.sendEmailForm)
      .subscribe(
        data => {
          this.serverResponseHandler = createSuccessResponse('Su mensaje se ha enviado.', null);
          this.contactForm.reset();
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.handleHttpErrorMessage(error);
          } else {
            this.serverResponseHandler = createGenericErrorResponse();
          }
        }
      );
  }

  handleHttpErrorMessage(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.status === 404) {
      this.serverResponseHandler = createdNotFoundErrorResponse('Los datos no son encontrados');
    } else {
      this.serverResponseHandler = handleDefaultHttpError(httpErrorResponse);
    }
  }
}

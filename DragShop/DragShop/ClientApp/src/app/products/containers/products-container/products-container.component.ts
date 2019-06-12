import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
//import { ContactFormService } from '../../services/contact-form.component';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
 //contactForm: FormGroup;
  constructor(/*private contactFormService: ContactFormService*/) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
  //  this.contactForm = this.contactFormService.initForm();
  }

}

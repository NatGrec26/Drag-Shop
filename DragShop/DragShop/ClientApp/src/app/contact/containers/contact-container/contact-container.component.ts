import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.component';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private contactFormService: ContactFormService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.contactFormService.initForm();
  }

}

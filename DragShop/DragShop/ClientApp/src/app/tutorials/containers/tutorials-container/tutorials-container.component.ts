import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
//import { ContactFormService } from '../../services/contact-form.component';

@Component({
  selector: 'app-tutorials-container',
  templateUrl: './tutorials-container.component.html',
  styleUrls: ['./tutorials-container.component.css']
})
export class TutorialsContainerComponent implements OnInit {
 //contactForm: FormGroup;
  constructor(/*private contactFormService: ContactFormService*/) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
  //  this.contactForm = this.contactFormService.initForm();
  }

}

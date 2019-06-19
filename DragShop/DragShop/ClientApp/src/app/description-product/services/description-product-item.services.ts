import { Injectable } from '@angular/core';
import { FormServiceBase } from '../../base/services/form-service-base';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DescriptionProductItemFormService extends FormServiceBase {
  constructor(fb: FormBuilder) {
    super(fb);
  }


  initForm(): FormGroup {
    return (this.form = this.fb.group({
     quantity: this.fb.control('', Validators.required)
    }));
  }
}

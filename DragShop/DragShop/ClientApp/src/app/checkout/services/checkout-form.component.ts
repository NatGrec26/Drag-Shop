import { Injectable } from '@angular/core';
import { FormServiceBase } from '../../base/services/form-service-base';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CheckoutFormService extends FormServiceBase {
    constructor(fb: FormBuilder) {
        super(fb);
    }

    initForm(): FormGroup {
        return (this.form = this.fb.group({
            firstName: this.fb.control('', [Validators.maxLength(50), Validators.required]),
            lastName: this.fb.control('', [Validators.maxLength(50), Validators.required]),
            email: this.fb.control('', [Validators.required, Validators.email, Validators.maxLength(100)]),
            message: this.fb.control('', [Validators.required, Validators.maxLength(400)])
        }));
    }
}
import { Injectable } from '@angular/core';
import { FormServiceBase } from '../../base/services/form-service-base';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService extends FormServiceBase {
    constructor(fb: FormBuilder) {
        super(fb);
    }

    initForm(): FormGroup {
        return (this.form = this.fb.group({
            firstName: this.fb.control('', [Validators.maxLength(50), Validators.required, Validators.pattern('[A-Za-z]*')]),
            lastName: this.fb.control('', [Validators.maxLength(50), Validators.required, Validators.pattern('[A-Za-z]*')]),
            phoneNumber: this.fb.control('', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{4}'), Validators.maxLength(9)]),
            email: this.fb.control('', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'), Validators.maxLength(100)]),
            message: this.fb.control('', [Validators.required, Validators.maxLength(400)])
        }));
    }
}
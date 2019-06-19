import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class FormServiceBase {
    form: FormGroup;
    constructor(public fb: FormBuilder) { }

    abstract initForm(): FormGroup;

    reset(defaultValue = null): void {
        if (defaultValue) {
            this.form.reset(defaultValue);
        } else {
            this.form.reset();
        }
        this.form.updateValueAndValidity();
    }
}

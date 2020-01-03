import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: 'form-example.component.html',
  styleUrls: ['form-example.component.scss'],
})
export class FormExampleComponent {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.initFormBuilder();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }

  private initFormBuilder() {
    this.form = new FormGroup({
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }

}

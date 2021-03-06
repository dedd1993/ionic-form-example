import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-form-example',
  templateUrl: 'form-example.component.html',
  styleUrls: ['form-example.component.scss'],
})
export class FormExampleComponent implements AfterViewInit {
  @ViewChild('dniElemRef', { static: false }) documentNumberElm: IonInput;

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.initFormBuilder();
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.setFocus() , 1000);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }

  private initFormBuilder() {
    this.form = new FormGroup({
      documentNumber: new FormControl({ value: null, disabled: false }, [ ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }

}

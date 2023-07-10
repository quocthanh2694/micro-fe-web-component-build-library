import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import '../../../ui-libs/src/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pj1Input = 'Default value';

  form = this.formBuilder.group({
    name: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.form.controls.name.markAsTouched();
    console.warn('Your order has been submitted', this.form.value);
    alert(this.form.value?.name)
    // this.form.reset();
  }


  onChangeInput(e: any) {
    console.log('@@e', e)
  }

  onChangeInputWC(e: any) {
    console.log('@@onChangeInputWC', e, e.detail.target.value)
    this.pj1Input = e.detail.target.value;
  }

}

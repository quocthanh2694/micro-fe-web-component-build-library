import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pj1Input = 'Default value';


  form = this.formBuilder.group({
    username: [null, Validators.required],
  });



  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.form.controls.username.markAsTouched();
    console.warn('Your order has been submitted', this.form.value);
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

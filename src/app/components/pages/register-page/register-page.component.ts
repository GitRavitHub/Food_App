import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  formData: any = {};

  onSubmit() {
    // Here, you can handle form submission logic, such as sending data to a backend server
    console.log('Form submitted with data:', this.formData);
    // You can also reset the form after submission
    this.formData = {};
  }

}

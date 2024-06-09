import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  };
  passwordError: boolean = false;

  constructor(private router: Router) {}

  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      return; // If the form is invalid, do not proceed
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.passwordError = true;
      return;
    }

    // Reset password error flag
    this.passwordError = false;

    // Perform your form submission logic here, such as sending the data to your backend server
    console.log('Form submitted with data:', this.formData);

    // After successful registration, navigate to the login page
    this.router.navigate(['/login']);

    // Reset form data
    this.formData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: ''
    };
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';

  constructor() { }

  login() {
    // Add login functionality here
    console.log('Logging in with username:', this.username, 'and password:', this.password);
  }

  forgotPassword() {
    // Add forgot password functionality here
    console.log('Forgot Password?');
  }

  register() {
    // Add registration functionality here
    console.log('Register');
  }
}

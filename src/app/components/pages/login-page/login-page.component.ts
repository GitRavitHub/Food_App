import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';


  constructor(private router: Router) { }
  onSubmit() {
    console.log('Logging in with username:', this.username, 'and password:', this.password);

    if (this.username === 'admin' && this.password === 'password') {

      this.router.navigate(['/fp']);  // Navigate to the home page on successful login
    } else {
      alert('Invalid username or password.');
    }

  /*forgotPassword() {
    // Add forgot password functionality here
    console.log('Forgot Password?');
  }

  register() {
    // Add registration functionality here
    console.log('Register');*/
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Dummy authentication logic for demonstration
    if (this.loginData.email === 'admin@example.com' && this.loginData.password === 'password') {
      alert('Login successful!');
      this.router.navigate(['/tutorials']); // Redirect to the tutorials page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}

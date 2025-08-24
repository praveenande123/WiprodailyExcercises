import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  template: `
  <h2>Login</h2>
  <form (ngSubmit)="submit()">
    <input [(ngModel)]="username" name="u" placeholder="Username">
    <input [(ngModel)]="password" name="p" placeholder="Password" type="password">
    <button>Login</button>
  </form>
  `
})
export class LoginComponent {
  username = 'demo'; password = 'demo';
  auth = inject(AuthService); router = inject(Router);
  submit() {
    this.auth.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/');
    });
  }
}

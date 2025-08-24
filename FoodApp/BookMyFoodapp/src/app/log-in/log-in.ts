import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>🔑 Login</h2>
    <form (ngSubmit)="login()" style="display:flex; flex-direction:column; width:250px;">
      <label for="username">Username:</label>
      <input id="username" [(ngModel)]="username" name="username" required />

      <label for="password">Password:</label>
      <input id="password" type="password" [(ngModel)]="password" name="password" required />

      <button type="submit" style="margin-top:12px;">Login</button>
    </form>

    <p *ngIf="message" style="color:green;">{{ message }}</p>
  `,
  styles: [`
    h2 { color: darkgreen; }
    input { margin-bottom: 8px; padding: 6px; }
    button { background: green; color: white; padding: 6px 12px; border: none; }
  `]
})
export class LogIn {
  username = '';
  password = '';
  message = '';

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.message = '✅ Login successful!';
    } else {
      this.message = '❌ Invalid credentials';
    }
  }
}

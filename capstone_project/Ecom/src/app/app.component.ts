
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Mini E-Commerce';
  constructor(public auth: AuthService) {}
  logout(){ this.auth.logout(); }
}

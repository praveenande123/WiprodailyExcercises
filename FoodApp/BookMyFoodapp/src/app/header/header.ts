import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
   <header>
  <div class="logo">🍔 Food App</div>
  <nav>
    <a [routerLink]="['/']" routerLinkActive="active-link">Food Menu</a> 
    
    <a [routerLink]="['/cart']" routerLinkActive="active-link">My Cart</a> 

    <a [routerLink]="['/login']" routerLinkActive="active-link">Log In</a>
  </nav>
</header>
  `,
  styles: [``]
})
export class Header {}

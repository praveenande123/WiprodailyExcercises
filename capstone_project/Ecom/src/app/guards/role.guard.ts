
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot){
    const roles = route.data['roles'] as string[];
    const userRole = this.auth.user?.role;
    if(roles?.includes(userRole as string)) return true;
    this.router.navigate(['/']); return false;
  }
}

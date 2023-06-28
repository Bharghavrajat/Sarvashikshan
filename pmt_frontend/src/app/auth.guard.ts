import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const isTokenValid = this.isTokenValid(token);

      if (isTokenValid) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }

    this.router.navigate(['/']);
    return false;
  }

  private isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwt_decode(token);
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      const currentDate = new Date();
      return expirationDate > currentDate;
    } catch (error) {
      return false;
    }
  }
  
}

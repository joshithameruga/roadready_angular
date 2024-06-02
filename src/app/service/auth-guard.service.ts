import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { JwtClientService } from './jwt-client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  

  constructor(private router: Router,private jwtService:JwtClientService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];

    // Get the user's role from the decoded token 
    const userRole = this.jwtService.getUserRole();
    console.log(userRole);

    // Check if the user's role matches the expected role
    if (userRole === expectedRole) {
      return true;
    } else {
      // Navigate to the login page or a forbidden page
      this.router.navigate(['/login']); // navigate back to the  login page
      return false;
    }
  }
}

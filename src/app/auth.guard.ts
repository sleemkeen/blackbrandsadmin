import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { Observable, Subject, throwError } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authservice: AuthService, private routes: Router) {

 }
 canActivate(): boolean {
   if (this.authservice.LoggedInUser()) {
    return true;
   } else {
     this.routes.navigate(['/login']);
      return false;
   }
 }
}

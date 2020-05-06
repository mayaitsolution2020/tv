import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }
  canActivate() {
    const token = localStorage.getItem('userToken');
    if (token) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

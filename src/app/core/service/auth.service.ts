import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lock , clientID} from '../models/jsonModel';
@Injectable()
export class AuthService {
    storage = sessionStorage;
  constructor(private router: Router) {
    lock.on('authenticated', (authResult: any) => {
        this.storage.setItem('token', authResult.tokenType + ' ' + authResult.idToken);
        this.router.navigate(['/cartManagement/dashboard']);
    });
    lock.on('authorization_error', error => {
    });
  }

  login() {
    lock.show();
  }

  logout() {
    this.storage.removeItem('token');
    lock.logout({
        returnTo: 'http://localhost:4200',
        clientID
      });
    this.router.navigate(['']);
  }

  isAuthenticated() {
   return this.storage.getItem('token') !== null ? true : false;
  }
}
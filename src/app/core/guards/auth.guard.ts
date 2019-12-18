// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { AuthService } from '../service/auth2.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(public auth: AuthService, public router: Router) {}
//     canActivate(): boolean {
//         if (this.auth.isAuthenticated) {
//             return true;
//         }
//         this.router.navigate(['/login']);
//         return false;
//     }
// }

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { AuthService } from '../service/auth.service';
// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private auth: AuthService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
//     return this.auth.isAuthenticated$.pipe(
//       tap(loggedIn => {
//         if (!loggedIn) {
//             // state.url = '/cartManagement/dashboard';
//             this.auth.login(state.url);
//         }
//       })
//     );
//   }

// }


import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService,  private route: Router) {}

    canActivate() {
    return this.auth.isAuthenticated() ? true : this.route.navigate(['']);
    }
}
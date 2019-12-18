import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'core-header',
    template: `
        <mat-toolbar id="header">
            <div class="heading-title">
                <a routerLink="/cartManagement/dashboard"
                    ><span class="title">Cart </span
                    ><span class="second">Management</span></a
                >
                <span class="al-rt" (click)="auth.login()" *ngIf="!auth.isAuthenticated()"> Log In</span>
                <span class="al-rt" (click)="auth.logout()" *ngIf="auth.isAuthenticated()"> Log Out</span>
            </div>
        </mat-toolbar>
    `
})
export class HeaderComponent {
    constructor(public auth: AuthService) {}
}

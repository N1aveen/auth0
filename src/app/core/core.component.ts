import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'core-root',
    template: `
       <router-outlet></router-outlet>
    `
})
export class CoreComponent {
    constructor() {}
}
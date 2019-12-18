import { Component } from '@angular/core';


@Component({
    selector: 'core-home',
    template: `<core-header></core-header>
    <router-outlet></router-outlet>
    <core-footer></core-footer>`
})

export class HomeComponent {}
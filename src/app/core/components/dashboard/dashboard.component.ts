import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component( {
    selector: 'core-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    constructor(private http: HttpClient) {
        this.http.get('http://starlord.hackerearth.com/bankAccount').subscribe( res => { 
            console.log(res);
        });
    }
}
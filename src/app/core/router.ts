import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
    {path : '' , component: HomeComponent},
    { path: 'cartManagement' , component: HomeComponent , canActivate: [AuthGuard], children: [
        { path: 'dashboard', component: DashboardComponent }
    ]}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CoreRouterModules {}

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRouterModules } from './router';
import { MaterialModule } from '../material.module';
// components
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

// services
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { CoreComponent } from './core.component';
import { AuthService } from './service/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreRouterModules,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        CoreComponent,
        HomeComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [AuthGuard, AuthService],
    bootstrap: [CoreComponent]
})
export class CoreModule {}
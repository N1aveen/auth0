// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRouterModules } from './router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// components
import { CoreComponent } from './core.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// services
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './service/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreRouterModules,
        MaterialModule,
        FormsModule,
        HttpClientModule
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { LoginRegistrationComponent } from './user/auth/login-registration/login-registration.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AllGymsListComponent } from './user/component/all-gyms-list/all-gyms-list.component';
import { AllTrainerListComponent } from './user/component/all-trainer-list/all-trainer-list.component';
import { OtherUserSericesComponent } from './user/component/other-user-serices/other-user-serices.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginRegistrationComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AllGymsListComponent,
    AllTrainerListComponent,
    OtherUserSericesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

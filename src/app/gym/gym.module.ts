import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymLoginRegistrationComponent } from './auth/gym-login-registration/gym-login-registration.component';
import { GymDashboardComponent } from './component/gym-dashboard/gym-dashboard.component';


@NgModule({
  declarations: [
    GymLoginRegistrationComponent,
       GymDashboardComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule
  ]
})
export class GymModule { }

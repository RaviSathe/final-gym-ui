import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerLoginRegistrationComponent } from './auth/trainer-login-registration/trainer-login-registration.component';
import { ActivityComponent } from './component/activity/activity.component';
import { TaskComponent } from './component/task/task.component';
import { AllComponent } from './component/all/all.component';
import { TrainerDashboardComponent } from './component/trainer-dashboard/trainer-dashboard.component';
import { TrainerHeaderComponent } from './common/trainer-header/trainer-header.component';
import { TrainerComponentHolderComponent } from './common/trainer-component-holder/trainer-component-holder.component';


@NgModule({
  declarations: [
    TrainerLoginRegistrationComponent,
    ActivityComponent,
    TaskComponent,
    AllComponent,
    TrainerDashboardComponent,
    TrainerHeaderComponent,
    TrainerComponentHolderComponent,
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule
  ]
})
export class TrainerModule { }

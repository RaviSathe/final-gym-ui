import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './component/activity/activity.component';
import { TaskComponent } from './component/task/task.component';
import { AllComponent } from './component/all/all.component';
import { TrainerLoginRegistrationComponent } from './auth/trainer-login-registration/trainer-login-registration.component';
import { TrainerDashboardComponent } from './component/trainer-dashboard/trainer-dashboard.component';
import { TrainerComponentHolderComponent } from './common/trainer-component-holder/trainer-component-holder.component';

const routes: Routes = [
  // {path:'',component:TrainerComponentHolderComponent,children:[
    {path:'',component:TrainerLoginRegistrationComponent,title:'Login-Registration'},
    {path:'dashboard',component:TrainerDashboardComponent,children:[
      {path:'',component:AllComponent},
      {path:'activity',component:ActivityComponent},
      {path:'trainer-task',component:TaskComponent}  ,
    ]},
  // ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }

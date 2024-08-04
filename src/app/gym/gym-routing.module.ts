import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymLoginRegistrationComponent } from './auth/gym-login-registration/gym-login-registration.component';
import { GymDashboardComponent } from './component/gym-dashboard/gym-dashboard.component';

const routes: Routes = [
  {path:'',component:GymLoginRegistrationComponent,title:'Login-Registration'},
  {path:'gym-dashboard',component:GymDashboardComponent,title:'Dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }

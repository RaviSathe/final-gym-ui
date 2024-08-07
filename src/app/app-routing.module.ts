import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { LoginRegistrationComponent } from './user/auth/login-registration/login-registration.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { AllGymsListComponent } from './user/component/all-gyms-list/all-gyms-list.component';
import { AllTrainerListComponent } from './user/component/all-trainer-list/all-trainer-list.component';
import { OtherUserSericesComponent } from './user/component/other-user-serices/other-user-serices.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'userloginPage',component:LoginRegistrationComponent,title:'Login'},
  {path:'dashboard',component:DashboardComponent,title:'Dashboard'},
  {path:'all-gyms',component:AllGymsListComponent,title:'Gyms'},
  {path:'all-trainers',component:AllTrainerListComponent,title:'Trainers'},
  {path:'other-services',component:OtherUserSericesComponent,title:'Services'},
  { path: 'gym', loadChildren: () => import('./gym/gym.module').then(m => m.GymModule) },
  { path: 'trainer', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

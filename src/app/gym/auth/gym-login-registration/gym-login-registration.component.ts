import { Component } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-gym-login-registration',
  templateUrl: './gym-login-registration.component.html',
  styleUrl: './gym-login-registration.component.scss'
})
export class GymLoginRegistrationComponent {


  formNumber = 1
  loginForm = false

  constructor(private _router:Router){}

  ngAfterViewInit(){
    let tl = gsap.timeline()
    tl.from(".left-input h3",{
      duration:.5,
      y:-100
    })
    tl.from(".left-input .g-btn",{
      opacity:0,
    })
    tl.from(".middle-line",{
      opacity:0,
    })
    tl.from(".input",{
      opacity:0,
    })
    tl.from(".t-and-c",{
      opacity:0,
    })
    tl.from(".btn-black",{
      opacity:0,
    })
  }

  onNext(){
    if(this.formNumber == 1){
      this.formNumber++
    }else if(this.formNumber == 2){
      this.formNumber++
    }else if(this.formNumber == 3){
      this.formNumber++
    }else if(this.formNumber == 4){
      this.formNumber++
    }
  }

  onBack(){
    if(this.formNumber == 5){
      this.formNumber--
    }else if(this.formNumber == 4){
      this.formNumber--
    }else if(this.formNumber == 3){
      this.formNumber--
    }else if(this.formNumber == 2){
      this.formNumber--
    }
  }

  loginGym(){
    this._router.navigate(['gym/gym-dashboard'])
  }

  registerGym(){
    this.loginForm = true
  }
}

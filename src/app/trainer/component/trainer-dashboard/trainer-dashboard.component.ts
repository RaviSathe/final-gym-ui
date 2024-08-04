import { Component } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrl: './trainer-dashboard.component.scss'
})
export class TrainerDashboardComponent {

  welcomePopUp:boolean = true
  locomotiveScroll: any;


  ngOnInit() {
    // Other initialization logic
  }

  ngAfterViewInit() {
    const scrollContainer = document.querySelector('#scroll');
    // if (scrollContainer) {
    //   this.locomotiveScroll = new LocomotiveScroll({
    //     el: scrollContainer as HTMLElement, // or use scrollContainer directly
    //     smooth: true,
    //   });
    // }

    this.init()
  }

  init(){
    let tl1 = gsap.timeline()
    gsap.from(".profile-img img",{
      opacity:0,
      x:-100
    })
    gsap.from(".profile-img h4",{
      opacity:0,
      x:-100
    })

    gsap.from(".mini-toggle-box div",{
      y:-100,
      opacity:0,
      // stagger:1,
    })
    gsap.from(".tab-name",{
      y:-100,
      opacity:0,
      stagger:1,
    })

    gsap.from("h5",{
      y:-100,
      opacity:0,
      // delay:1
    })
    gsap.from(".tag,.value,.client-name,i",{
      x:-100,
      opacity:0,
      delay:1
    })
    gsap.from(".white-btn",{
      y:-100,
      opacity:0,
    })

  }

  ngOnDestroy() {
    // if (this.locomotiveScroll) this.locomotiveScroll.destroy();
  }
  welcomeOk(){
    this.welcomePopUp = false
  }
}

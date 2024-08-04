import { Component } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap"


@Component({
  selector: 'app-gym-dashboard',
  templateUrl: './gym-dashboard.component.html',
  styleUrl: './gym-dashboard.component.scss'
})
export class GymDashboardComponent {

  locomotiveScroll: any;

  ngAfterViewInit(){
    // const scrollContainer = document.querySelector('#scroll');
    // if (scrollContainer) {
    //   this.locomotiveScroll = new LocomotiveScroll({
    //     el: scrollContainer as HTMLElement, // or use scrollContainer directly
    //     smooth: true,
    //   });
    // }

    this.init()
  }

  init(){
    gsap.from(".gym-banner-img",{
      opacity:0,
      duration:2
    })

    gsap.from(".gym-sub-img img",{
      y:-100,
      stagger:1
    })
    gsap.from(".input",{
      stagger:1,
      opacity:0,
      y:-100
    })

    let tl2 = gsap.timeline()
    tl2.from(".gym-trainer-list",{
      opacity:0,
      x:-100,
      duration:2
    })

    gsap.from(".white-btn",{
      opacity:0,
      y:-100,
      stagger:1,
      // duration:2
    })

    let tl1 = gsap.timeline()
    tl1.from(".gym-plans",{
      opacity:0,
      x:100,
      delay:1,
      duration:2,
    })
    tl1.from(".table tr",{
      opacity:0,
      y:-100,
      stagger:1
    })

    gsap.from(".amaniti-card",{
      opacity:0,
      y:-200,
      delay:1,
      stagger:1
    })
  }

}

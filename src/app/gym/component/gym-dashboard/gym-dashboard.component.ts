import { Component } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';


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
  }

}

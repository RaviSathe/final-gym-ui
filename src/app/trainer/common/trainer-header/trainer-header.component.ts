import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-trainer-header',
  templateUrl: './trainer-header.component.html',
  styleUrl: './trainer-header.component.scss'
})
export class TrainerHeaderComponent {

  burgerMenuClick(){
    // alert("clicked")
  }

  ngAfterViewInit() {
    gsap.from(".nav", {
       duration: 1,
        y: -100 
      });
      
  }
}

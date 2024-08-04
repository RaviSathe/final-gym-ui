import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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

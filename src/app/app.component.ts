import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gym-ui';

  private locomotiveScroll: any;
  private routerSubscription!: Subscription;
  private mouseMoveListener!: (event: MouseEvent) => void;

  constructor(private router: Router) {}

  ngOnInit() {
    this.mouseMoveListener = this.onMouseMove.bind(this);
    window.addEventListener('mousemove', this.mouseMoveListener);
  }

  private onMouseMove(event: MouseEvent) {
    const minicircle = document.querySelector('.minicircle') as HTMLElement;
    if (minicircle) {
      minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }
  }

  ngAfterViewInit() {
    this.initLocomotiveScroll();

    // Reinitialize Locomotive Scroll on route change
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initLocomotiveScroll();
      }
    });
  }

  initLocomotiveScroll() {
    if (this.locomotiveScroll) this.locomotiveScroll.destroy();

    const scrollContainer = document.querySelector('#js-scroll');
    if (scrollContainer) {
      this.locomotiveScroll = new LocomotiveScroll({
        el: scrollContainer as HTMLElement, // or use scrollContainer directly
        smooth: true,
      });
    }

    // Update Locomotive Scroll
    setTimeout(() => {
      this.locomotiveScroll.update();
    }, 500);
  }

  ngOnDestroy() {
    if (this.locomotiveScroll) this.locomotiveScroll.destroy();
    if (this.routerSubscription) this.routerSubscription.unsubscribe();

    window.removeEventListener('mousemove', this.mouseMoveListener);
  }
}

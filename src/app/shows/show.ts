import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shows',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css'
})
export class Show implements OnInit , AfterViewInit{
  private fragmentToScroll: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Écouter les changements de fragment
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  private viewInitialized = false;

  ngAfterViewInit() {
    this.viewInitialized = true;
    // Si on a un fragment en attente, scroller maintenant
    if (this.fragmentToScroll) {
      setTimeout(() => {
        this.scrollToElement(this.fragmentToScroll!);
        this.fragmentToScroll = null;
      }, 50);
    }
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

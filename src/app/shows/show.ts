import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shows',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css'
})
export class Show {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Écouter les changements de fragment
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
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

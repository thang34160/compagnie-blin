import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bring-the-company',
  imports: [],
  templateUrl: './bring-the-company.html',
  styleUrl: './bring-the-company.css'
})
export class BringTheCompany {
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

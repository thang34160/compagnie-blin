import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [
    RouterLink
  ],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  private router = inject(Router);

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

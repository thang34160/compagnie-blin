import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Carrousel} from './carrousel/carrousel';
import {NgOptimizedImage} from '@angular/common';
import {Jumbotron} from './jumbotron/jumbotron';
import {News} from './news/news';
import {Gallery} from './gallery/gallery';
import {Diary} from './diary/diary';
import {Contact} from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer, Carrousel, NgOptimizedImage, Jumbotron, News, Gallery, Diary, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'compagnie-blin';

  isSpecialRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Remplacez '/mon-composant-special' par votre route
        this.isSpecialRoute = event.url === '/show' ||
          event.url.includes('/show');
      }
    });
  }
}

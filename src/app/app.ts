import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Carrousel} from './carrousel/carrousel';
import {NgOptimizedImage} from '@angular/common';
import {Jumbotron} from './jumbotron/jumbotron';
import {News} from './news/news';
import {Gallery} from './gallery/gallery';
import {Diary} from './diary/diary';
import {Contact} from './contact/contact';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer, Carrousel, NgOptimizedImage, Jumbotron, News, Gallery, Diary, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  // protected title = 'compagnie-blin';
  //
  // isSpecialRoute = false;
  //
  // constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Remplacez '/mon-composant-special' par votre route
  //       this.isSpecialRoute = event.url === '/show' ||
  //         event.url.includes('/show');
  //     }
  //   });
  // }
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      });
  }
}

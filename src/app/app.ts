import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Carrousel} from './carrousel/carrousel';
import {NgOptimizedImage} from '@angular/common';
import {Jumbotron} from './jumbotron/jumbotron';
import {News} from './news/news';
import {Gallery} from './gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Carrousel, NgOptimizedImage, Jumbotron, News, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'compagnie-blin';

}

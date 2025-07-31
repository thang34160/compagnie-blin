import { Component } from '@angular/core';
import {Carrousel} from '../carrousel/carrousel';
import {Diary} from '../diary/diary';
import {Gallery} from '../gallery/gallery';
import {Jumbotron} from '../jumbotron/jumbotron';
import {News} from '../news/news';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';

@Component({
  selector: 'app-home',
  imports: [
    Carrousel,
    Diary,
    Gallery,
    Jumbotron,
    News,
    Footer,
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

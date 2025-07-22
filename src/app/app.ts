import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Carrousel} from './carrousel/carrousel';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Carrousel, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'compagnie-blin';
  protected imagePath = 'compagnie.jpg';
}

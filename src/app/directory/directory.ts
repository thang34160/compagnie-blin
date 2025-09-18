import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-directory',
  imports: [],
  templateUrl: './directory.html',
  styleUrl: './directory.css'
})
export class Directory {
 currentFilter: 'tous' | 'en-cours' | 'passes' = 'tous';

 // Images
  images = [
    {id: 1, src: '/img/show/les-3-oies-ortie-eglise.jpg', title: 'LES 3 OIES',status: 'en-cours'},
    {id: 2, src: '/img/show/les-musiciens-breme-animaux-affiche.jpg', title: 'LES MUSICIENS DE BREME', status: 'passes'},
    {id: 3, src: '/img/show/le-carnaval-des-animaux-le-lion.jpg', title: 'LE CARNAVAL DES ANIMAUX', status: 'passes'},
    {id: 4, src: '/img/show/le-dormeur-eveille-trompette.jpg', title: 'LE DORMEUR EVEILLE', status: 'en-cours'},
    {id: 5, src: '/img/show/panique-a-la-cave-demenageurs.jpg', title: 'PANIQUE A LA CAVE', status: 'passes'},
    {id: 6, src: '/img/show/pimpon-d-or-chevalier.jpg', title: "PIMPON D'OR", status: 'en-cours'},
  ];

  getFilteredImages() {
    if (this.currentFilter === 'tous') {
      return this.images;
    }
    return this.images.filter(image => image.status === this.currentFilter);
  }

  setFilter(filter: 'tous' | 'en-cours' | 'passes') {
    this.currentFilter = filter;
  }

  constructor(private router: Router) {}

  goToShow(showId: number) {
    this.router.navigate(['/show'], {
      fragment: `show-${showId}`
    });
  }
}

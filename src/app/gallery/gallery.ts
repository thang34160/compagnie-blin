import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
// Tableau des éléments à afficher dans le carousel (reçu du composant parent)
  items: any[] = [
    {id: 1, src: '/img/show/les-3-oies-ortie-eglise.jpg', title: 'LES 3 OIES',link: '/show#show-1',status: 'en-cours'},
    {id: 2, src: '/img/show/les-musiciens-breme-animaux-affiche.jpg', title: 'LES MUSICIENS DE BREME', link: '/show#show-2',status: 'passes'},
    {id: 3, src: '/img/show/le-carnaval-des-animaux-le-lion.jpg', title: 'LE CARNAVAL DES ANIMAUX', link: '/show#show-3',status: 'passes'},
    {id: 4, src: '/img/show/le-dormeur-eveille-trompette.jpg', title: 'LE DORMEUR EVEILLE', link: '/show#show-4',status: 'en-cours'},
    {id: 5, src: '/img/show/panique-a-la-cave-demenageurs.jpg', title: 'PANIQUE A LA CAVE', link: '/show#show-5',status: 'passes'},
    {id: 6, src: '/img/show/pimpon-d-or-chevalier.jpg', title: "PIMPON D'OR", link: '/show#show-6',status: 'en-cours'}
  ];

  // Index de l'élément actuellement affiché
  currentIndex: number = 0;

  // Méthode pour aller à l'élément précédent
  prev(): void {
    // Si on est au premier élément, on revient au dernier
    if (this.currentIndex === 0) {
      this.currentIndex = this.items.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  // Méthode pour aller à l'élément suivant
  next(): void {
    // Si on est au dernier élément, on revient au premier
    if (this.currentIndex === this.items.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  // Méthode pour aller à un élément spécifique
  goTo(index: number): void {
    // On s'assure que l'index est valide
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
    }
  }
}

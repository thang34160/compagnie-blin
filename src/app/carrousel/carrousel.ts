import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css'
})

export class Carrousel implements OnInit {
  protected imagePath = [
    'compagnie.jpg',
    'expositions.jpeg',
    'saison.jpg'
  ];

  // Tableau des images à afficher
  images = [
    { src: 'compagnie.jpg', alt: 'Image 1' },
    { src: 'expositions.jpeg', alt: 'Image 2' },
    { src: 'saison.jpg', alt: 'Image 3' }
  ];

  currentIndex = 0; // Index de l'image actuellement affichée
  private intervalId: any; // ID de l'intervalle pour pouvoir l'arrêter

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // Démarre le défilement automatique
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change d'image toutes les 3 secondes
  }

  // Arrête le défilement automatique
  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Passe à l'image suivante
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Va directement à une image spécifique (quand on clique sur un point)
  goToSlide(index: number) {
    this.currentIndex = index;
    // Redémarre le timer pour éviter un changement immédiat
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}




import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true, // Recommandé pour Angular 17+
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css'
})
export class Carrousel implements OnInit, OnDestroy {
  protected currentIndex = 0;
  private intervalId: number | undefined;

  // Déclaration des images avec typage strict
  protected readonly images = [
    { src: 'compagnie.jpg', alt: 'Image compagnie' },
    { src: 'saison.jpg', alt: 'Image saison' },
    { src: 'expositions.jpg', alt: 'Image expositions' }
  ];

  ngOnInit(): void {
    this.startAutoRotation();
  }

  ngOnDestroy(): void {
    this.stopAutoRotation();
  }

  private startAutoRotation(): void {
    this.intervalId = window.setInterval(() => {
      this.nextImage();
    }, 4000); // 3 secondes entre chaque image
  }

  private stopAutoRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  protected nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  protected goToImage(index: number): void {
    this.currentIndex = index;
  }
}

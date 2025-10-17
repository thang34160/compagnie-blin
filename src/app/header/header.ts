import {Component, HostListener, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;

  constructor(private router: Router) {}

  // Fonction pour toggle le menu burger
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fonction pour naviguer vers les sections "faire venir"
  goToBring(section: number): void {
    // Fermer le menu mobile après clic
    this.isMenuOpen = false;

    // Navigation vers la page appropriée avec un fragment
    switch(section) {
      case 1:
        this.router.navigate(['/bring-the-company'], { fragment: 'bring-the-company-1' });
        break;
      case 2:
        this.router.navigate(['/bring-the-company'], { fragment: 'bring-the-company-2' });
        break;
      case 3:
        this.router.navigate(['/bring-the-company'], { fragment: 'bring-the-company-3' });
        break;
    }
  }

  // Fonction pour scroller vers un élément
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Fermer le menu si on clique en dehors
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('#navbar-dropdown') && !target.closest('[aria-controls="navbar-dropdown"]')) {
      this.isMenuOpen = false;
    }
  }

  // Fermer le menu quand on redimensionne la fenêtre (au cas où)
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const window = event.target as Window;
    if (window.innerWidth >= 768) { // md breakpoint
      this.isMenuOpen = true; // Toujours ouvert sur desktop
    } else {
      this.isMenuOpen = false; // Fermé par défaut sur mobile
    }
  }

}

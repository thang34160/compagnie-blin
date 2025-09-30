import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bring-the-company',
  imports: [],
  templateUrl: './bring-the-company.html',
  styleUrl: './bring-the-company.css'
})
export class BringTheCompany {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Écouter les changements de fragment
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  items: any[] = [
    {id: 1, src: '/img/bring-the-compagny/expo-brunoy.jpg', title: '',link: '/show#show-1',status: 'en-cours'},
    {id: 2, src: '/img/bring-the-compagny/expo-comb-ensemble.jpg', title: '', link: '/show#show-2',status: 'passes'},
    {id: 3, src: '/img/bring-the-compagny/expo-folies-tetes-boutique.jpg', title: '', link: '/show#show-3',status: 'passes'},
    {id: 4, src: '/img/bring-the-compagny/expo-fontainbleau.jpg', title: '', link: '/show#show-4',status: 'en-cours'},
    {id: 5, src: '/img/bring-the-compagny/expo-hyeres.jpg', title: '', link: '/show#show-5',status: 'passes'},
    {id: 6, src: '/img/bring-the-compagny/expo-hyeres-vue-ensemble-av-castelet.jpg', title: "", link: '/show#show-6',status: 'en-cours'},
    {id: 7, src: '/img/bring-the-compagny/expo-podium-ce-qu-il-vous-plaira.jpg', title: '', link: '/show#show-5',status: 'passes'},
    {id: 8, src: '/img/bring-the-compagny/expo-podium-elsa.jpeg', title: '', link: '/show#show-5',status: 'passes'},
    {id: 9, src: '/img/bring-the-compagny/expo-saumur.jpg', title: '', link: '/show#show-5',status: 'passes'}
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

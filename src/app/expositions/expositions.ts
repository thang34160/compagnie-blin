import {Component, inject, signal} from '@angular/core';
import {Show} from '../shows/show';
import {ShowModel, ShowService} from '../services/show';


@Component({
  selector: 'app-expositions',
  imports: [],
  templateUrl: './expositions.html',
  styleUrl: './expositions.css'
})
export class Expositions {
  private readonly showService = inject(ShowService);

  // Utilisation des signals (Angular 16+)
  shows = signal<ShowModel[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadShows();
  }

  loadShows() {
    this.loading.set(true);
    this.error.set(null);

    this.showService.getAllShows().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.shows.set(response.data);
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des shows');
        this.loading.set(false);
        console.error('Erreur:', err);
      }
    });
  }

  editShow(show: Show) {
    console.log('Modifier le show:', show);
    // Logique de modification
  }

  deleteShow(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce show ?')) {
      this.showService.deleteShow(id).subscribe({
        next: (response) => {
          if (response.success) {
            // Retirer le show de la liste locale
            this.shows.update(shows => shows.filter(show => show._id !== id));
          }
        },
        error: (err) => {
          this.error.set('Erreur lors de la suppression');
          console.error('Erreur:', err);
        }
      });
    }
  }
}

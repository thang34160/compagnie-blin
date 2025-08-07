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
    {id: 1, src: 'spectacle1.jpg', title: 'spectacle 1',status: 'en-cours'},
    {id: 2, src: 'spectacle2.jpg', title: 'spectacle 2', status: 'passes'},
    {id: 3, src: 'spectacle3.jpg', title: 'spectacle 3', status: 'passes'},
    {id: 4, src: 'spectacle4.jpg', title: 'spectacle 4', status: 'en-cours'},
    {id: 5, src: 'spectacle1.jpg', title: 'spectacle 5', status: 'passes'},
    {id: 6, src: 'spectacle2.jpg', title: 'spectacle 6', status: 'en-cours'},
    {id: 7, src: 'spectacle3.jpg', title: 'spectacle 7', status: 'passes'},
    {id: 8, src: 'spectacle4.jpg', title: 'spectacle 8', status: 'passes'},
    {id: 9, src: 'spectacle1.jpg', title: 'spectacle 9', status: 'passes'},
    {id: 10, src: 'spectacle2.jpg', title: 'spectacle 10', status: 'passes'}
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

import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  imports: [],
  templateUrl: './diary.html',
  styleUrl: './diary.css'
})
export class Diary {

private router = inject(Router);

goToShow(showId: number) {
  this.router.navigate(['/show'], {
    fragment: `show-${showId}`
  });
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isDropdownOpen = false;

  onMouseEnter() {
    this.isDropdownOpen = true;
  }

  onMouseLeave() {
    this.isDropdownOpen = false;
  }
}

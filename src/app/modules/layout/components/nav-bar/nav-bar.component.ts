import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: false
})
export class NavBarComponent {
  constructor(private router: Router) {}

  redirectToNewsAndUpdates() {
    this.router.navigate(['/news-and-update']);
  }

}

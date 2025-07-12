import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss'],
  standalone: false
})
export class FeatureSectionComponent {

  constructor(private router: Router) {}

  redirectToTaskAnnouncement() {
    this.router.navigate(['/task-announcement']);
  }
  
  redirectToNewsAndUpdates() {
    this.router.navigate(['/news-and-update']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-section',
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.scss'],
  standalone: false
})
export class TaskSectionComponent {

  constructor(private router: Router) {}

  redirectToTaskAnnouncement() {
    this.router.navigate(['/task-announcement']);
  }

  redirectToGetStarted() {
    this.router.navigate(['/starter-kit']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-section',
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.scss'],
  standalone: false
})
export class TaskSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToTaskAnnouncement() {
    this.router.navigate(['/task-announcement']);
  }

  redirectToGetStarted() {
    this.router.navigate(['/get-started']);
  }

  redirectToImportantDates() {
    this.router.navigate(['/important-dates']);
  }
}

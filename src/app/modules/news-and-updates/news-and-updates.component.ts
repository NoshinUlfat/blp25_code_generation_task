import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-and-updates',
  templateUrl: './news-and-updates.component.html',
  styleUrls: ['./news-and-updates.component.scss'],
  standalone: false
})
export class NewsAndUpdatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToTaskAnnouncement() {
    this.router.navigate(['/task-announcement']);
  }
}

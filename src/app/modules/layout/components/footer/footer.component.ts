import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  constructor(private router: Router) { }

  redirectToTaskAnnouncement(): void {
    this.router.navigate(['/task-announcement']);
  }
}

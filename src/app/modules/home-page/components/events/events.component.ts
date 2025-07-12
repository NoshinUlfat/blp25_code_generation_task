import { Component, HostListener } from '@angular/core';
import { TimelineEvent } from '../../interfaces/time-line-event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  standalone: false,
})
export class EventsComponent {
  layout: 'horizontal' | 'vertical' = 'horizontal';

  events: TimelineEvent[] = [
    { date: 'TBD', title: 'Train Dataset Release', color: '#6fa8dc' },
    { date: 'TBD', title: 'Dev Dataset Release', color: '#e06666' },
    { date: 'TBD', title: 'Test Dataset Release', color: '#93c47d' },
    { date: 'TBD', title: 'Final Rankings Release', color: '#6fa8dc' },
    { date: 'Sep 29, 2025', title: 'Paper Submission Deadline', color: '#e06666' },
    { date: 'Nov 3, 2025', title: 'Paper Acceptance Notification', color: '#93c47d' },
    { date: 'Nov 11, 2025', title: 'Camera‑ready Due', color: '#6fa8dc' },
  ];
  
  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.layout = window.innerWidth < 768 ? 'vertical' : 'horizontal';
  }
}

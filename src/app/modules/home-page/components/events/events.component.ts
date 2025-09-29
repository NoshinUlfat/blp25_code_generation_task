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
    // { date: '10 Jul, 2025', title: 'Registration on codalab and beginning of the development cycle', color: '#6fa8dc' },
    { date: '10 Aug - 7 Sep, 2025', title: 'Dev Phase', color: '#e06666' },
    { date: '8-14 Sep, 2025', title: 'Test Phase', color: '#93c47d' },
    { date: '15 Sep, 2025', title: 'Final Ranking Published & Paper Invitations', color: '#6fa8dc' },
    { date: '4 Oct, 2025', title: 'Paper Submission Deadline', color: '#e06666' },
    { date: '3 Nov, 2025', title: 'Notification of acceptance', color: '#93c47d' },
    { date: '11 Nov, 2025', title: 'Camera‑ready Due', color: '#6fa8dc' },
    { date: '23 Dec, 2025', title: 'Workshop co-located with IJCNLP-AACL 2025', color: '#e06666' },
  ];
  
  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.layout = window.innerWidth < 900 ? 'vertical' : 'horizontal';
  }
}

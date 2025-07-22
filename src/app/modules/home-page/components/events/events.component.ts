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
    { date: '10 Jul, 2025', title: 'Registration on codalab and beginning of the development cycle', color: '#6fa8dc' },
    { date: '25 Sep, 2025', title: 'Beginning of the evaluation cycle (test sets release and run submission)', color: '#e06666' },
    { date: '1 Oct, 2025', title: 'End of the evaluation cycle', color: '#93c47d' },
    { date: '3  Oct, 2025', title: 'Publish rank list and share paper submission details', color: '#6fa8dc' },
    { date: '29 Sep, 2025', title: 'Paper Submission Deadline (Shared Task System Papers Due)', color: '#e06666' },
    { date: '3 Nov, 2025', title: 'Notification of acceptance', color: '#93c47d' },
    { date: '11 Nov, 2025', title: 'Camera‑ready Due', color: '#6fa8dc' },
    { date: '23 Dec, 2025', title: 'Workshop co-located with IJCNLP-AACL 2025 (Mumbai, India)', color: '#e06666' },
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

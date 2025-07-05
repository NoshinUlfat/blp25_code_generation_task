import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-announcement',
  templateUrl: './task-announcement.component.html',
  styleUrls: ['./task-announcement.component.scss'],
  standalone: false
})
export class TaskAnnouncementComponent {

  // @ViewChild('exampleRow') exampleRow!: ElementRef;

  // copyExampleRow() {
  //   const text = this.exampleRow.nativeElement.innerText;
  //   navigator.clipboard.writeText(text);
  // }

}

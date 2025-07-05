import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss'],
  standalone: false
})
export class TaskDescriptionComponent {

 @ViewChild('exampleRow') exampleRow!: ElementRef;

  copyExampleRow() {
    const text = this.exampleRow.nativeElement.innerText;
    navigator.clipboard.writeText(text);
  }

}

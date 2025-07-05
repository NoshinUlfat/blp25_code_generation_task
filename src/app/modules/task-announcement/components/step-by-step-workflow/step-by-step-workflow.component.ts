import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-by-step-workflow',
  templateUrl: './step-by-step-workflow.component.html',
  styleUrls: ['./step-by-step-workflow.component.scss'],
  standalone: false
})
export class StepByStepWorkflowComponent {

  @ViewChild('stepContent1') stepContent1!: ElementRef;
  @ViewChild('stepContent2') stepContent2!: ElementRef;
 
  copyStepContent(step: number) {
    let text = '';
    if (step === 1) text = this.stepContent1.nativeElement.innerText;
    if (step === 2) text = this.stepContent2.nativeElement.innerText;

    navigator.clipboard.writeText(text);
  }

}

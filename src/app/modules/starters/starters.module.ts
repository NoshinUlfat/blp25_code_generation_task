import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartersComponent } from './starters.component';
import { EvaluationAndSubmissionComponent } from './components/evaluation-and-submission/evaluation-and-submission.component';
import { StepByStepWorkflowComponent } from './components/step-by-step-workflow/step-by-step-workflow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StartersComponent, EvaluationAndSubmissionComponent, StepByStepWorkflowComponent,],
  exports: [StartersComponent, EvaluationAndSubmissionComponent, StepByStepWorkflowComponent,],
})
export class StartersModule { }

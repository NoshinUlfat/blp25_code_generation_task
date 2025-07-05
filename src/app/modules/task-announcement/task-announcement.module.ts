import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAnnouncementComponent } from './task-announcement.component';
import { LayoutModule } from '../layout/layout.module';
import { TaskDescriptionComponent } from './components/task-description/task-description.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { StepByStepWorkflowComponent } from './components/step-by-step-workflow/step-by-step-workflow.component';
import { EvaluationAndSubmissionComponent } from './components/evaluation-and-submission/evaluation-and-submission.component';

@NgModule({
  imports: [
    CommonModule, LayoutModule
  ],
  declarations: [DatasetsComponent, EvaluationAndSubmissionComponent, StepByStepWorkflowComponent, TaskAnnouncementComponent, TaskDescriptionComponent],
  exports: [DatasetsComponent, EvaluationAndSubmissionComponent, StepByStepWorkflowComponent, TaskAnnouncementComponent, TaskDescriptionComponent],
})
export class TaskAnnouncementModule { }

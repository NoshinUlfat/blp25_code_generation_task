import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAnnouncementComponent } from './task-announcement.component';
import { LayoutModule } from '../layout/layout.module';
import { TaskDescriptionComponent } from './components/task-description/task-description.component';
import { DatasetsComponent } from './components/datasets/datasets.component';

@NgModule({
  imports: [
    CommonModule, LayoutModule
  ],
  declarations: [DatasetsComponent, TaskAnnouncementComponent, TaskDescriptionComponent],
  exports: [DatasetsComponent, TaskAnnouncementComponent, TaskDescriptionComponent],
})
export class TaskAnnouncementModule { }

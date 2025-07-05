import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { TaskOrganizersComponent } from './components/task-organizers/task-organizers.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HomePageComponent, TaskSectionComponent, FeatureSectionComponent, TaskOrganizersComponent],
  imports: [
    CommonModule, LayoutModule
  ],
  exports: [HomePageComponent, TaskSectionComponent, FeatureSectionComponent, TaskOrganizersComponent],
})
export class HomePageModule { }

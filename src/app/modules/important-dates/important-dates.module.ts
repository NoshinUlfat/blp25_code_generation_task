import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantDatesComponent } from './important-dates.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImportantDatesComponent],
  exports: [ImportantDatesComponent],
})
export class ImportantDatesModule { }

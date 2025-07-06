import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsAndUpdatesComponent } from './news-and-updates.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsAndUpdatesComponent],
  exports: [NewsAndUpdatesComponent],
})
export class NewsAndUpdatesModule { }

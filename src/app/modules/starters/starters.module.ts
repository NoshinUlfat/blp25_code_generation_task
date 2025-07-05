import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartersComponent } from './starters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StartersComponent],
  exports: [StartersComponent],
})
export class StartersModule { }

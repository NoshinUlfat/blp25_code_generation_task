import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NavBarComponent, TopBannerComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LayoutComponent, NavBarComponent, TopBannerComponent, FooterComponent],
})
export class LayoutModule { }

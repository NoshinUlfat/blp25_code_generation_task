import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './modules/layout/layout.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { TaskAnnouncementModule } from './modules/task-announcement/task-announcement.module';
import { StartersModule } from './modules/starters/starters.module';
import { ImportantDatesModule } from './modules/important-dates/important-dates.module';
import { NewsAndUpdatesModule } from './modules/news-and-updates/news-and-updates.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomePageModule,
    ImportantDatesModule,
    NewsAndUpdatesModule,
    StartersModule,
    TaskAnnouncementModule],
  bootstrap: [AppComponent]
})

export class AppModule { }

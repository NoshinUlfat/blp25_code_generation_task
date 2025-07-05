import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { TaskAnnouncementComponent } from "./modules/task-announcement/task-announcement.component";
import { StartersComponent } from "./modules/starters/starters.component";
import { ImportantDatesComponent } from "./modules/important-dates/important-dates.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'task-announcement', component: TaskAnnouncementComponent},
  {path: 'get-started', component: StartersComponent},
  {path: 'important-dates', component: ImportantDatesComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule],
    providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]

})

export class AppRoutingModule { }

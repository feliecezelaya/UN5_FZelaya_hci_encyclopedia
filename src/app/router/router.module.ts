import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { TypesComponent } from "../types/types.component";
import { PlayingComponent } from "../playing/playing.component";
import { CleaningComponent } from "../cleaning/cleaning.component";
import { PurchasingComponent } from "../purchasing/purchasing.component";
import { ContactComponent } from "../contact/contact.component";
import { HelpComponent } from "../help/help.component";

const myRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "types",
    component: TypesComponent
  },
  {
    path: "playing",
    component: PlayingComponent
  },
  {
    path: "cleaning",
    component: CleaningComponent
  },
  {
    path: "purchasing",
    component: PurchasingComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "help",
    component: HelpComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {}

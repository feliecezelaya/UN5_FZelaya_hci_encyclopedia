import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "hci-encyclopedia-app";
  copyrightYear: string = moment().format("YYYY");

  constructor(private router: Router, private route: ActivatedRoute) {}

  callRoute(routeName: string) {
    console.log("Route Name: " + routeName);
    this.router.navigate([routeName]);
  }
}

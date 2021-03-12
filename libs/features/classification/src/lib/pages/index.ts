import {Route} from "@angular/router";
import {GridComponent, ItemComponent} from "./components";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];
export const components = [DashboardComponent, GridComponent, ItemComponent];

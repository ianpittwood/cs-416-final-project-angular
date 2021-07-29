import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ScatterComponent} from "./scatter/scatter.component";
import {CountryLineComponent} from "./country-line/country-line.component";
import {StackedBarComponent} from "./stacked-bar/stacked-bar.component";
import {CountryYearBarComponent} from "./country-year-bar/country-year-bar.component";
import {GdpLineComponent} from "./gdp-line/gdp-line.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "main", component: DashboardComponent},
  {path: "scatter", component: ScatterComponent},
  {path: "gdp", component: GdpLineComponent},
  {path: "country", redirectTo: "country/World", pathMatch: "full"},
  {path: "country/:country", component: CountryLineComponent},
  {path: "year", redirectTo: "year/1980", pathMatch: "full"},
  {path: "year/:year", component: StackedBarComponent},
  {path: "country/year/:year", redirectTo: "country/World/year/:year", pathMatch: "full"},
  {path: "country/:country/year", redirectTo: "country/:country/year/1980", pathMatch: "full"},
  {path: "country/:country/year/:year", component: CountryYearBarComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

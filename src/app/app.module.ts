import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryYearBarComponent } from './country-year-bar/country-year-bar.component';
import { ScatterComponent } from './scatter/scatter.component';
import { CountryLineComponent } from './country-line/country-line.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { GdpLineComponent } from './gdp-line/gdp-line.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryYearPieComponent } from './country-year-pie/country-year-pie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxSliderModule} from "@angular-slider/ngx-slider";

@NgModule({
  declarations: [
    AppComponent,
    CountryYearBarComponent,
    ScatterComponent,
    CountryLineComponent,
    StackedBarComponent,
    GdpLineComponent,
    CountryYearPieComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

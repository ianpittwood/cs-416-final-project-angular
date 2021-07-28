import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryYearBarComponent } from './country-year-bar/country-year-bar.component';
import { ScatterComponent } from './scatter/scatter.component';
import { CountryLineComponent } from './country-line/country-line.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryYearBarComponent,
    ScatterComponent,
    CountryLineComponent,
    StackedBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

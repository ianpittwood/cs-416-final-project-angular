import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {cleanData, CountryYearDataPoint} from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getAllDataPoints(): Observable<CountryYearDataPoint[]> {
    return of(cleanData);
  }

  getDataPointsByYear(year: number): Observable<CountryYearDataPoint[]> {
    return of(cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.year === year;
    }));
  }

  getDataPointsByCountry(country: string): Observable<CountryYearDataPoint[]> {
    return of(cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.country === country;
    }));
  }

  getDataPointsByCountryYear(country: string, year: number): Observable<CountryYearDataPoint[]> {
    return of(cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.country === country && datapoint.year === year;
    }));
  }

  getCountries(): Observable<string[]> {
    return of([...new Set(cleanData.map((datapoint: CountryYearDataPoint) => datapoint.country))])
  }
}

import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {cleanData, CountryYearDataPoint, IncomeShareDifference, narrativeFacts} from "./data";

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

  getChange(country: string, startYear: number, endYear: number): Observable<IncomeShareDifference> {
    let startData = cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.country === country && datapoint.year === startYear;
    })[0];
    let endData = cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.country === country && datapoint.year === endYear;
    })[0];

    let changeData = {
      name: country,
      startYear: startYear,
      endYear: endYear,
      gdpPerCapitaChange: endData.gdpPerCapita - startData.gdpPerCapita,
      giniCoefficientChange: endData.giniCoefficient - startData.giniCoefficient,
      incomeShareBot50Change: endData.incomeShareBot50 - startData.incomeShareBot50,
      incomeShareMid40Change: endData.incomeShareMid40 - startData.incomeShareMid40,
      incomeShareTop10Change: endData.incomeShareTop10 - startData.incomeShareTop10,
      incomeShareNext9Change: endData.incomeShareNext9 - startData.incomeShareNext9,
      incomeShareTop1Change: endData.incomeShareTop1 - startData.incomeShareTop1
    };
    return of(changeData);
  }

  getG20AggregateData(year: number): Observable<CountryYearDataPoint> {
    let data = cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.year === year;
    });
    let dataAggregated = data.reduce(function(previousValue: CountryYearDataPoint, currentValue: CountryYearDataPoint) {
      return {
        id: 0,
        country: "G20 Aggregate",
        year: year,
        gdp: previousValue.gdp + currentValue.gdp,
        totalPopulation: 0,
        gdpPerCapita: previousValue.gdpPerCapita + currentValue.gdpPerCapita,
        giniCoefficient: previousValue.giniCoefficient + currentValue.giniCoefficient,
        incomeShareBot50: previousValue.incomeShareBot50 + currentValue.incomeShareBot50,
        incomeShareMid40: previousValue.incomeShareMid40 + currentValue.incomeShareMid40,
        incomeShareTop10: previousValue.incomeShareTop10 + currentValue.incomeShareTop10,
        incomeShareNext9: previousValue.incomeShareNext9 + currentValue.incomeShareNext9,
        incomeShareTop1: previousValue.incomeShareTop1 + currentValue.incomeShareTop1
      }
    });
    dataAggregated.gdp /= data.length;
    dataAggregated.gdpPerCapita /= data.length;
    dataAggregated.giniCoefficient /= data.length;
    dataAggregated.incomeShareBot50 /= data.length;
    dataAggregated.incomeShareMid40 /= data.length;
    dataAggregated.incomeShareTop10 /= data.length;
    dataAggregated.incomeShareNext9 /= data.length;
    dataAggregated.incomeShareTop1 /= data.length;
    return of(dataAggregated);
  }

  getG20AggregateChange(startYear: number, endYear: number): Observable<IncomeShareDifference> {
    let startData = cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.year === startYear;
    });
    let endData = cleanData.filter(function (datapoint: CountryYearDataPoint) {
      return datapoint.year === endYear;
    });

    let startDataAggregated = startData.reduce(function(previousValue: CountryYearDataPoint, currentValue: CountryYearDataPoint) {
      return {
        id: 0,
        country: "G20 Aggregate",
        year: startYear,
        gdp: 0,
        totalPopulation: 0,
        gdpPerCapita: previousValue.gdpPerCapita + currentValue.gdpPerCapita,
        giniCoefficient: previousValue.giniCoefficient + currentValue.giniCoefficient,
        incomeShareBot50: previousValue.incomeShareBot50 + currentValue.incomeShareBot50,
        incomeShareMid40: previousValue.incomeShareMid40 + currentValue.incomeShareMid40,
        incomeShareTop10: previousValue.incomeShareTop10 + currentValue.incomeShareTop10,
        incomeShareNext9: previousValue.incomeShareNext9 + currentValue.incomeShareNext9,
        incomeShareTop1: previousValue.incomeShareTop1 + currentValue.incomeShareTop1
      }
    });
    startDataAggregated.gdpPerCapita /= startData.length;
    startDataAggregated.giniCoefficient /= startData.length;
    startDataAggregated.incomeShareBot50 /= startData.length;
    startDataAggregated.incomeShareMid40 /= startData.length;
    startDataAggregated.incomeShareTop10 /= startData.length;
    startDataAggregated.incomeShareNext9 /= startData.length;
    startDataAggregated.incomeShareTop1 /= startData.length;

    let endDataAggregated = endData.reduce(function(previousValue: CountryYearDataPoint, currentValue: CountryYearDataPoint) {
      return {
        id: 0,
        country: "G20 Aggregate",
        year: startYear,
        gdp: 0,
        totalPopulation: 0,
        gdpPerCapita: previousValue.gdpPerCapita + currentValue.gdpPerCapita,
        giniCoefficient: previousValue.giniCoefficient + currentValue.giniCoefficient,
        incomeShareBot50: previousValue.incomeShareBot50 + currentValue.incomeShareBot50,
        incomeShareMid40: previousValue.incomeShareMid40 + currentValue.incomeShareMid40,
        incomeShareTop10: previousValue.incomeShareTop10 + currentValue.incomeShareTop10,
        incomeShareNext9: previousValue.incomeShareNext9 + currentValue.incomeShareNext9,
        incomeShareTop1: previousValue.incomeShareTop1 + currentValue.incomeShareTop1
      }
    });
    endDataAggregated.gdpPerCapita /= endData.length;
    endDataAggregated.giniCoefficient /= endData.length;
    endDataAggregated.incomeShareBot50 /= endData.length;
    endDataAggregated.incomeShareMid40 /= endData.length;
    endDataAggregated.incomeShareTop10 /= endData.length;
    endDataAggregated.incomeShareNext9 /= endData.length;
    endDataAggregated.incomeShareTop1 /= endData.length;

    let changeData = {
      name: "G20 Aggregate",
      startYear: startYear,
      endYear: endYear,
      gdpPerCapitaChange: endDataAggregated.gdpPerCapita - startDataAggregated.gdpPerCapita,
      giniCoefficientChange: endDataAggregated.giniCoefficient - startDataAggregated.giniCoefficient,
      incomeShareBot50Change: endDataAggregated.incomeShareBot50 - startDataAggregated.incomeShareBot50,
      incomeShareMid40Change: endDataAggregated.incomeShareMid40 - startDataAggregated.incomeShareMid40,
      incomeShareTop10Change: endDataAggregated.incomeShareTop10 - startDataAggregated.incomeShareTop10,
      incomeShareNext9Change: endDataAggregated.incomeShareNext9 - startDataAggregated.incomeShareNext9,
      incomeShareTop1Change: endDataAggregated.incomeShareTop1 - startDataAggregated.incomeShareTop1
    };
    return of(changeData);
  }

  getWorldEventsForYear(year: number): Observable<Array<string>> {
    // @ts-ignore
    let events = narrativeFacts[year]["World"]
    if (events.length) return of(events);
    else return of(["No major events noted"]);
  }

  getCountryEventsForYear(country: string, year: number): Observable<Array<string>> {
    // @ts-ignore
    let events = narrativeFacts[year][country]
    if (events.length) return of(events);
    else return of(["No major events noted"]);
  }
}

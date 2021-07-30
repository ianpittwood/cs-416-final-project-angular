import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CountryYearDataPoint, IncomeShareDifference} from "../data";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";
import {roundNearest5} from "../utils";
import {ActivatedRoute} from "@angular/router";

interface SplitCountryYearDataPoint {
  name: string,
  index: number,
  country: string,
  year: number,
  value: number
}

@Component({
  selector: 'app-country-line',
  templateUrl: './country-line.component.html',
  styleUrls: ['./country-line.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CountryLineComponent implements OnInit {
  public country: String = "";
  public changeData!: IncomeShareDifference;
  private data: CountryYearDataPoint[] = [];
  private splitData: SplitCountryYearDataPoint[] = [];
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 50, left: 50};
  private width = 750;
  private height = 400;
  private incomeShareKeys = ["incomeShareTop1", "incomeShareNext9", "incomeShareMid40", "incomeShareBot50"];
  private incomeShareKeysReadable = [
    "Top 1% Income Share", "Next 9% Income Share", "Middle 40% Income Share", "Bottom 50% Income Share"];
  private segmentColors = [
    "#ECD662",
    "#5D8233",
    "#284E78",
    "#3E215D"
  ];

  public getChangeDataGDPPerCapitaValueHtml() {
    if (this.changeData.gdpPerCapitaChange >= 0) {
      return `<span class="positiveValueChange">+$${this.changeData.gdpPerCapitaChange.toFixed(2)}</span>`
    }
    else {
      return `<span class="negativeValueChange">-$${Math.abs(this.changeData.gdpPerCapitaChange).toFixed(2)}</span>`
    }
  }

  public getChangeDataGiniCoefficient() {
    if (this.changeData.giniCoefficientChange <= 0) {
      return `<span class="positiveValueChange">-${Math.abs(this.changeData.giniCoefficientChange).toFixed(2)}</span>`
    }
    else {
      return `<span class="negativeValueChange">+${this.changeData.giniCoefficientChange.toFixed(2)}</span>`
    }
  }

  public getChangeDataBottom50Html() {
    if (this.changeData.incomeShareBot50Change >= 0) {
      return `<span class="positiveValueChange">+${this.changeData.incomeShareBot50Change.toFixed(2)}%</span>`
    }
    else {
      return `<span class="negativeValueChange">-${Math.abs(this.changeData.incomeShareBot50Change).toFixed(2)}%</span>`
    }
  }

  public getChangeDataMid40Html() {
    if (this.changeData.incomeShareMid40Change >= 0) {
      return `<span class="positiveValueChange">+${this.changeData.incomeShareMid40Change.toFixed(2)}%</span>`
    }
    else {
      return `<span class="negativeValueChange">-${Math.abs(this.changeData.incomeShareMid40Change).toFixed(2)}%</span>`
    }
  }

  public getChangeDataNext9Html() {
    if (this.changeData.incomeShareNext9Change >= 0) {
      return `<span class="positiveValueChange">+${this.changeData.incomeShareNext9Change.toFixed(2)}%</span>`
    }
    else {
      return `<span class="negativeValueChange">-${Math.abs(this.changeData.incomeShareNext9Change).toFixed(2)}%</span>`
    }
  }

  public getChangeDataTop1Html() {
    if (this.changeData.incomeShareTop1Change >= 0) {
      return `<span class="positiveValueChange">+${this.changeData.incomeShareTop1Change.toFixed(2)}%</span>`
    }
    else {
      return `<span class="negativeValueChange">-${Math.abs(this.changeData.incomeShareTop1Change).toFixed(2)}%</span>`
    }
  }

  public inequalityImproved() {
    return this.changeData.giniCoefficientChange < 0;
  }

  public top10Increased() {
    return this.changeData.incomeShareTop10Change > 0;
  }

  public bot50Increased() {
    return this.changeData.incomeShareBot50Change > 0;
  }

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.parseParams();
    this.getChangeData();
    this.getDataPointsByCountry();
    this.splitDataByStat(this.data);
    this.createSvg();
    this.render();
  }

  private parseParams(): void {
    this.country = String(this.route.snapshot.paramMap.get("country"));
  }

  private getChangeData(): void {
    this.dataService.getChange(this.country.toString(), 1980, 2019).subscribe(data => this.changeData = data);
  }

  private getDataPointsByCountry(): void {
    this.dataService.getDataPointsByCountry(this.country.toString()).subscribe(data => this.data = data);
  }

  private splitDataByStat(series: CountryYearDataPoint[]): void {
    let splitData = series.map((datapoint: CountryYearDataPoint) => ({
      name: "incomeShareBot50",
      index: 3,
      country: datapoint.country,
      year: datapoint.year,
      value: datapoint.incomeShareBot50,
    }));
    splitData = splitData.concat(series.map((datapoint: CountryYearDataPoint) => ({
      name: "incomeShareMid40",
      index: 2,
      country: datapoint.country,
      year: datapoint.year,
      value: datapoint.incomeShareMid40,
    })));
    splitData = splitData.concat(series.map((datapoint: CountryYearDataPoint) => ({
      name: "incomeShareNext9",
      index: 1,
      country: datapoint.country,
      year: datapoint.year,
      value: datapoint.incomeShareNext9,
    })));
    splitData = splitData.concat(series.map((datapoint: CountryYearDataPoint) => ({
      name: "incomeShareTop1",
      index: 0,
      country: datapoint.country,
      year: datapoint.year,
      value: datapoint.incomeShareTop1,
    })));
    this.splitData = splitData;
  }

  private createSvg(): void {
    this.svg = d3.select("figure#country-line")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);
  }

  private static xGridlines(xScale: any) {
    return d3.axisBottom(xScale).ticks(20);
  }

  private static yGridlines(yScale: any) {
    return d3.axisLeft(yScale).ticks(10);
  }

  private render(): void {
    const parseTime = d3.timeParse("%Y");
    let maxIncomeShare: number | undefined = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => ([
        datapoint.incomeShareTop1,
        datapoint.incomeShareNext9,
        datapoint.incomeShareMid40,
        datapoint.incomeShareBot50
      ])));


    const xScale = d3.scaleTime()
      // @ts-ignore
      .domain(d3.extent(this.data, function(d) {return parseTime(d.year);}))
      .range([0, this.width - this.margin.right]);
    const yScale = d3.scaleLinear()
      .domain([0, roundNearest5(maxIncomeShare)])
      .range([this.height, this.margin.top]);

    // X Axis Gridlines
    this.svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${String(this.height)})`)
      .call(CountryLineComponent.xGridlines(xScale)
        .tickSize(-this.height + this.margin.top)
        // @ts-ignore
        .tickFormat("")
      );
    this.svg.append("g")
      .attr("class", "grid")
      .call(CountryLineComponent.yGridlines(yScale)
        .tickSize(-this.width + this.margin.right)
        // @ts-ignore
        .tickFormat("")
      )

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(0,${String(this.height)})`)
      .call(d3.axisBottom(xScale).ticks(20));
    let yAxis = this.svg.append("g")
      .call(d3.axisLeft(yScale).ticks(10));

    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    // Apply X Axis label
    this.svg.append("text")
      .attr("transform", `translate(${this.width/2},${this.height + this.margin.top + 20})`)
      .style("text-anchor", "middle")
      .text("Year")
    // Apply Y Axis label
    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - this.margin.left)
      .attr("x", 0 - (this.height/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("% of Income")

    let groupedData = d3.group(this.splitData, d => d.name);
    let groupNames = Array.from(groupedData.keys());

    let colorScale = d3.scaleOrdinal()
      .domain(groupNames)
      .range(this.segmentColors);

    this.svg.append("g")
      .selectAll("path")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`)
      .data(groupedData)
      .join("path")
      .attr("class", "line")
      .style("fill", "none")
      .style("stroke-width", 5)
      .style("stroke", (d: any) => colorScale(d[0]))
      .attr("d", (d: any) => {
        return d3.line()
          // @ts-ignore
          .x(d => xScale(parseTime(d.year)))
          // @ts-ignore
          .y(d => yScale(d.value))
          (d[1])
      })
  }

}

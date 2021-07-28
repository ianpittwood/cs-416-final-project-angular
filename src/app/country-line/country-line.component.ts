import { Component, OnInit } from '@angular/core';
import {CountryYearDataPoint} from "../data";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";
import {roundNearest5} from "../utils";

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
  styleUrls: ['./country-line.component.sass']
})
export class CountryLineComponent implements OnInit {
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

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getDataPointsByCountry();
    this.splitDataByStat(this.data);
    this.createSvg();
    this.render();
  }

  private getDataPointsByCountry(country: string = "World"): void {
    console.log(`Loading ${country}`)
    this.dataService.getDataPointsByCountry(country).subscribe(data => this.data = data);
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

  private render(): void {
    const parseTime = d3.timeParse("%Y");
    let maxIncomeShare: number | undefined = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => ([
        datapoint.incomeShareTop10,
        datapoint.incomeShareBot50
      ])));


    const xScale = d3.scaleTime()
      // @ts-ignore
      .domain(d3.extent(this.data, function(d) {return parseTime(d.year);}))
      .range([0, this.width - this.margin.right]);
    const yScale = d3.scaleLinear()
      .domain([0, roundNearest5(maxIncomeShare)])
      .range([this.height, this.margin.top]);

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(0,${String(this.height)})`)
      .call(d3.axisBottom(xScale));
    let yAxis = this.svg.append("g")
      .call(d3.axisLeft(yScale));

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
        console.log(d)
        return d3.line()
          // @ts-ignore
          .x(d => xScale(parseTime(d.year)))
          // @ts-ignore
          .y(d => yScale(d.value))
          (d[1])
      })
  }

}

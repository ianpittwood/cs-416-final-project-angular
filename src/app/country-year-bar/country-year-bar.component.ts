import { Component, OnInit } from '@angular/core';
import {CountryYearDataPoint} from "../data";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";

@Component({
  selector: 'app-country-year-bar',
  templateUrl: './country-year-bar.component.html',
  styleUrls: ['./country-year-bar.component.sass']
})
export class CountryYearBarComponent implements OnInit {
  private data: CountryYearDataPoint = {
    id: 0,
    country: "undefined",
    year: 1980,
    gdp: 0,
    gdpPerCapita: 0,
    totalPopulation: 0,
    incomeShareBot50: 0,
    incomeShareMid40: 0,
    incomeShareTop10: 0,
    incomeShareNext9: 0,
    incomeShareTop1: 0
  };
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 50, left: 50};
  private width = 750;
  private height = 400;
  private incomeShareKeysReadable = ["Top 1%", "Next 9%", "Middle 40%", "Bottom 50%"];
  private segmentColors = [
    "#ECD662",
    "#5D8233",
    "#284E78",
    "#3E215D"
  ];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getDataPointsByCountry();
    this.createSvg();
    this.render();
  }

  private getDataPointsByCountry(country: string = "World", year: number = 1980): void {
    console.log(`Loading ${country} ${year}`);
    this.dataService.getDataPointsByCountryYear(country, year).subscribe(data => this.data = data[0]);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#country-year-bar")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);
  }

  private render(): void {
    const xScale = d3.scaleBand()
      .domain(this.incomeShareKeysReadable)
      .range([0, this.width - this.margin.right])
      .padding(0.2);
    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, this.margin.top]);

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(0,${String(this.height)})`)
      .call(d3.axisBottom(xScale));
    let yAxis = this.svg.append("g")
      .call(d3.axisLeft(yScale));

    // Apply X Axis label
    this.svg.append("text")
      .attr("transform", `translate(${this.width/2},${this.height + this.margin.top + 20})`)
      .style("text-anchor", "middle")
      .text("Segment of Population")
    // Apply Y Axis label
    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - this.margin.left)
      .attr("x", 0 - (this.height/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("% of Income")

    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    let formattedData = [
      {name: "Top 1%", value: this.data.incomeShareTop1},
      {name: "Next 9%", value: this.data.incomeShareTop10 - this.data.incomeShareTop1},
      {name: "Middle 40%", value: this.data.incomeShareMid40},
      {name: "Bottom 50%", value: this.data.incomeShareBot50}
    ];
    console.log(formattedData)

    const update = this.svg.selectAll("rect")
      .data(formattedData);

    update
      .exit()
      .remove();

    update
      .transition()
      .duration(500)
      .attr("y", (d: { value: d3.NumberValue; }) => yScale(d.value));

    update.enter()
      .append("rect")
      .attr("fill", "#10b0ff")
      .attr("x", (d: { name: string; }) => xScale(d.name))
      .attr("width", (d: any) => xScale.bandwidth())
      .attr("y", (d: { value: d3.NumberValue; }) => yScale(d.value))
      .attr("height", (d: { value: d3.NumberValue; }) => this.height - yScale(d.value));
  }
}

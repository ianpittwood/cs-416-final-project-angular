import { Component, OnInit } from '@angular/core';
import {CountryYearDataPoint} from "../data";
import {ActivatedRoute} from "@angular/router";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";

interface SplitCountryYearDataPoint {
  name: string,
  index: number,
  country: string,
  year: number,
  value: number
}

@Component({
  selector: 'app-gdp-line',
  templateUrl: './gdp-line.component.html',
  styleUrls: ['./gdp-line.component.sass']
})
export class GdpLineComponent implements OnInit {
  private data: CountryYearDataPoint[] = [];
  private splitData: SplitCountryYearDataPoint[] = [];
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 50, left: 70};
  private width = 750;
  private height = 500;
  private countryColors = [
    "#3957ff",
    "#d3fe14",
    "#c9080a",
    "#fec7f8",
    "#0b7b3e",
    "#0bf0e9",
    "#c203c8",
    "#fd9b39",
    "#888593",
    "#906407",
    "#98ba7f",
    "#fe6794",
    "#10b0ff",
    "#ac7bff",
    "#fee7c0",
    "#964c63",
    "#1da49c",
    "#0ad811",
    "#bbd9fd",
    "#fe6cfe",
    "#7a041f"
  ];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getDimensions();
    this.getDataPointsByCountry();
    this.splitDataByStat(this.data);
    this.createSvg();
    this.render();
  }

  private getDimensions(): void {
    this.width = window.innerWidth/2.5;
  }

  private getDataPointsByCountry(): void {
    this.dataService.getAllDataPoints().subscribe(data => this.data = data);
  }

  private splitDataByStat(series: CountryYearDataPoint[]): void {
    this.splitData = series.map((datapoint: CountryYearDataPoint) => ({
      name: "gdpPerCapita",
      index: 0,
      country: datapoint.country,
      year: datapoint.year,
      value: datapoint.gdpPerCapita,
    }));
  }

  private createSvg(): void {
    this.svg = d3.select("figure#gdp-line")
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
    let maxGdp: number | undefined = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => ([
        datapoint.gdpPerCapita
      ])));


    const xScale = d3.scaleTime()
      // @ts-ignore
      .domain(d3.extent(this.data, function(d) {return parseTime(d.year);}))
      .range([0, this.width - this.margin.right]);
    const yScale = d3.scaleLinear()
      .domain([0, Number(maxGdp) + 1000])
      .range([this.height, this.margin.top]);

    // X Axis Gridlines
    this.svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${String(this.height)})`)
      .call(GdpLineComponent.xGridlines(xScale)
        .tickSize(-this.height + this.margin.top)
        // @ts-ignore
        .tickFormat("")
      );
    this.svg.append("g")
      .attr("class", "grid")
      .call(GdpLineComponent.yGridlines(yScale)
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
      .text("GDP per capita (current USD)")

    let groupedData = d3.group(this.splitData, d => d.country);
    let groupNames = Array.from(groupedData.keys()).sort();

    let colorScale = d3.scaleOrdinal()
      .domain(groupNames)
      .range(this.countryColors);

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

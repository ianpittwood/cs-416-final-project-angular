import { Component, OnInit } from '@angular/core';
import {CountryYearDataPoint} from "../data";
import {ActivatedRoute} from "@angular/router";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";

@Component({
  selector: 'app-country-year-pie',
  templateUrl: './country-year-pie.component.html',
  styleUrls: ['./country-year-pie.component.sass']
})
export class CountryYearPieComponent implements OnInit {
  public country: string = "";
  public year: number = 0;
  private data: CountryYearDataPoint = {
    id: 0,
    country: "undefined",
    year: 1980,
    gdp: 0,
    gdpPerCapita: 0,
    giniCoefficient: 0,
    totalPopulation: 0,
    incomeShareBot50: 0,
    incomeShareMid40: 0,
    incomeShareTop10: 0,
    incomeShareNext9: 0,
    incomeShareTop1: 0
  };
  private svg: any;
  private margin = {top: 10, right: 10, bottom: 10, left: 10};
  private width = 500;
  private height = 500;
  private incomeShareKeysReadable = ["Top 1%", "Next 9%", "Middle 40%", "Bottom 50%"];
  private segmentColors = [
    "#ECD662",
    "#5D8233",
    "#284E78",
    "#3E215D"
  ];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getDataPointsByCountry();
    this.createSvg();
    this.render();
  }

  private getDataPointsByCountry(): void {
    this.country = String(this.route.snapshot.paramMap.get("country"));
    this.year = Number(this.route.snapshot.paramMap.get("year"));
    this.dataService.getDataPointsByCountryYear(this.country,this.year).subscribe(data => this.data = data[0]);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#country-year-pie")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);
  }

  private render(): void {
    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    let formattedData = [
      {name: "Bottom 50%", value: this.data.incomeShareBot50},
      {name: "Middle 40%", value: this.data.incomeShareMid40},
      {name: "Next 9%", value: this.data.incomeShareNext9},
      {name: "Top 1%", value: this.data.incomeShareTop1},
    ];
    let colorScale = d3.scaleOrdinal()
      .domain(formattedData.map((d) => d.name))
      .range(this.segmentColors);
    let pie = d3.pie()
      .sort(null)
      // @ts-ignore
      .value(d => d.value);
    // @ts-ignore
    let arcs = pie(formattedData);

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(Math.min(this.width, this.height) / 2 - 1);

    let arcLabel = function() {
      const radius = Math.min(500, 500) / 2 * 0.8;
      return d3.arc().innerRadius(radius).outerRadius(radius)
    }

    this.svg.append("g")
      .attr("transform", `translate(${String(this.width/2)},${String(this.height/2)})`)
      .attr("stroke", "white")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", (d: { data: { name: string; }; }) => colorScale(d.data.name))
      .attr("d", arc)
      .append("title")
      .text((d: { data: { name: any; value: number; }; }) => `${d.data.name}: ${d.data.value.toFixed(2)}`);

    this.svg.append("g")
      .attr("transform", `translate(${String(this.width/2)},${String(this.height/2)})`)
      .attr("class", "labelContainer")
      .selectAll("text")
      .data(arcs)
      .join("text")
      // @ts-ignore
      .attr("transform", d => `translate(${arcLabel.centroid(d)}`)
      .call((text: { append: (arg0: string) => any; }) => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d: { data: { name: any; }; }) => d.data.name))
      .call((text: { filter: (arg0: (d: { endAngle: number; startAngle: number; }) => boolean) => { (): any; new(): any; append: { (arg0: string): { (): any; new(): any; attr: { (arg0: string, arg1: number): { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; attr: { (arg0: string, arg1: number): { (): any; new(): any; text: { (arg0: (d: any) => any): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => text.filter((d: { endAngle: number; startAngle: number; }) => (d.endAngle - d.startAngle) > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toFixed(2)))
  }

}

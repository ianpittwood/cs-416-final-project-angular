import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {CountryYearDataPoint} from "../data";
import * as d3 from "d3";
import {roundNearest5} from "../utils";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ScatterComponent implements OnInit {
  private data: CountryYearDataPoint[] = [];
  private countries: string[] = [];
  private svg: any;
  private margin = {top: 40, right: 40, bottom: 80, left: 60};
  private width = 750;
  private height = 400;
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

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getDataPointsByYear();
    this.createSvg();
    this.render();
  }

  private getCountries(): void {
    this.dataService.getCountries().subscribe(data => this.countries = data);
  }

  private getDataPointsByYear(year: number = 1980): void {
    this.dataService.getDataPointsByYear(year).subscribe(data => this.data = data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);
  }

  private render(): void {
    let maxIncomeShare: number | undefined = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => ([
        datapoint.incomeShareTop10,
        datapoint.incomeShareBot50
    ])));
    let maxGDPPerCapita: number | undefined = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => datapoint.gdpPerCapita
    ));

    const xScale = d3.scaleLinear()
      .domain([0, roundNearest5(maxIncomeShare)])
      .range([0, this.width - this.margin.right]);
    const yScale = d3.scaleLinear()
      .domain([0, roundNearest5(maxIncomeShare)])
      .range([this.height, this.margin.top]);
    const colorScale = d3.scaleOrdinal(this.countries, this.countryColors)
      .unknown("black");
    let rScale: d3.ScalePower<number, number, never>;
    if (typeof maxGDPPerCapita === "number") {
      rScale = d3.scaleSqrt([0, Math.sqrt(maxGDPPerCapita)], [0, 32]);
    }
    else {
      rScale = d3.scaleSqrt([0, 32], [0, 32]);
    }

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.height + this.margin.top)})`)
      .call(d3.axisBottom(xScale));
    let yAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`)
      .call(d3.axisLeft(yScale));

    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    // Apply X Axis label
    this.svg.append("text")
      .attr("transform", `translate(${this.width/2},${this.height + this.margin.top + 60})`)
      .style("text-anchor", "middle")
      .text("Bottom 50% of Population % of Income")
    // Apply Y Axis label
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - this.margin.left)
      .attr("x", 0 - (this.height/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Top 10% of Population % of Income")

    this.data.sort(function(a, b) {
      return b.gdpPerCapita - a.gdpPerCapita;
    });

    const update = g.attr("stroke", "black")
      .selectAll("circle")
      .data(this.data);

    update.exit()
      .remove();

    update
      .transition()
      .duration(500);

    update
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", function (d: CountryYearDataPoint) {
        return xScale(d.incomeShareBot50)
      })
      .attr("cy", function (d: CountryYearDataPoint) {
        return yScale(d.incomeShareTop10)
      })
      .attr("r", function (d: CountryYearDataPoint) {
        return rScale(Math.sqrt(d.gdpPerCapita))
      })
      .attr("fill", (d: CountryYearDataPoint) => colorScale(d.country));
  }

}

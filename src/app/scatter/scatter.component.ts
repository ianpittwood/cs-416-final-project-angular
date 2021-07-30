import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {CountryYearDataPoint} from "../data";
import * as d3 from "d3";
import {roundNearest5} from "../utils";

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ScatterComponent implements OnInit {
  @Input() yearInput: number | undefined;

  private year: number = 1980;
  private data: CountryYearDataPoint[] = [];
  private countries: string[] = [];
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 50, left: 70};
  private width = 600;
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

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getCountries();
    this.resolveInput();
    this.getDataPointsByYear();
    this.createSvg();
    this.render();
  }

  ngOnChanges(): void {
    this.getCountries();
    this.resolveInput();
    this.getDataPointsByYear();
    this.getSvg();
    this.render();
  }

  private getCountries(): void {
    this.dataService.getCountries().subscribe(data => this.countries = data);
  }

  private resolveInput(): void {
    if (this.yearInput) this.year = this.yearInput;
  }

  private getDataPointsByYear(): void {
    this.dataService.getDataPointsByYear(this.year).subscribe(data => this.data = data);
  }

  private createSvg(): void {
    console.log(this.width)
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);
  }

  private getSvg(): void {
    d3.selectAll("figure#scatter > svg > *").remove();
    this.svg = d3.select("figure#scatter").select("svg");
  }

  private static xGridlines(xScale: any) {
    return d3.axisBottom(xScale).ticks(10);
  }

  private static yGridlines(yScale: any) {
    return d3.axisLeft(yScale).ticks(10);
  }

  private render(): void {
    let maxGDP: number;
    // @ts-ignore
    maxGDP = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => datapoint.gdp
      ))/1000000000;
    let maxPopulation: number;
    // @ts-ignore
    maxPopulation = d3.max(
      this.data.flatMap((datapoint: CountryYearDataPoint) => datapoint.totalPopulation
      ));

    const xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, this.width - this.margin.right]);
    const yScale = d3.scaleLog()
      .domain([10, 100000])
      .range([this.height, this.margin.top]);
    this.countries.sort();
    const colorScale = d3.scaleOrdinal(this.countries, this.countryColors)
      .unknown("black");
    let rScale = d3.scaleSqrt([0, Math.sqrt(maxPopulation)], [0, 32]);

    // X Axis Gridlines
    this.svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.height + this.margin.top)})`)
      .call(ScatterComponent.xGridlines(xScale)
        .tickSize(-this.height + this.margin.top)
        // @ts-ignore
        .tickFormat("")
      );
    // Y Axis Gridlines
    this.svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`)
      .call(ScatterComponent.yGridlines(yScale)
        .tickSize(-this.width + this.margin.right)
        // @ts-ignore
        .tickFormat("")
      )

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.height + this.margin.top)})`)
      .call(d3.axisBottom(xScale));
    let yAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`)
      .call(d3.axisLeft(yScale).ticks(5, "~g"));

    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    // Apply X Axis label
    this.svg.append("text")
      .attr("transform", `translate(${this.width / 2 + this.margin.left},${this.height + this.margin.top + 40})`)
      .style("text-anchor", "middle")
      .text("Gini coefficient")
    // Apply Y Axis label
    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("x", 0 - (this.height / 2 + this.margin.top))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("GDP in billions of $ (current USD)")

    this.data.sort(function (a, b) {
      return b.totalPopulation - a.totalPopulation;
    });

    let tooltip = d3.select("div#chartRow").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    let tipMouseover = function(event: { clientX: number; clientY: number; }, d: CountryYearDataPoint) {
      let html = `<div class="color-box" style="background-color: ${colorScale(d.country)}"></div><strong>${d.country}</strong><br>
Total Population: ${(d.totalPopulation/1000000).toFixed(2)} million<br>
GDP: $${(d.gdp/1000000000).toFixed(2)} billion<br>
GDP per capita: $${d.gdpPerCapita.toFixed(2)}<br>
Top 1%: ${d.incomeShareTop1.toFixed(2)}%<br>
Next 9%: ${d.incomeShareNext9.toFixed(2)}%<br>
Middle 40%: ${d.incomeShareMid40.toFixed(2)}%<br>
Bottom 50%: ${d.incomeShareBot50.toFixed(2)}%<br>`;
      tooltip.html(html)
        .style("left", (event.clientX + 15) + "px")
        .style("top", (event.clientY - 30) + "px")
        .transition()
        .duration(200)
        .style("opacity", 0.9);
    }

    let tipMouseout = function(d: CountryYearDataPoint) {
      tooltip.transition()
        .duration(300)
        .style("opacity", 0)
    }

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
      .append("a")
      .attr("href", (d: CountryYearDataPoint) => `${window.location.origin}/country/${d.country}`)
      .append("circle")
      .attr("class", "point")
      .attr("cx", function (d: CountryYearDataPoint) {
        console.log(d)
        return xScale(d.giniCoefficient)
      })
      .attr("cy", function (d: CountryYearDataPoint) {
        return yScale(d.gdp/1000000000)
      })
      .attr("r", function (d: CountryYearDataPoint) {
        return rScale(Math.sqrt(d.totalPopulation))
      })
      .attr("fill", (d: CountryYearDataPoint) => colorScale(d.country))
      .on("mouseover", tipMouseover)
      .on("mouseout", tipMouseout)
  }
}

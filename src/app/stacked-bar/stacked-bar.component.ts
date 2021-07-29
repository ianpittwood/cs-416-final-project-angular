import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CountryYearDataPoint} from "../data";
import {DataServiceService} from "../data-service.service";
import * as d3 from "d3";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class StackedBarComponent implements OnInit {
  public year: number = 1980;
  private data: CountryYearDataPoint[] = [];
  private countries: string[] = [];
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 80, left: 50};
  private width = 750;
  private height = 400;
  private incomeShareKeys = ["incomeShareTop1", "incomeShareNext9", "incomeShareMid40", "incomeShareBot50"];
  private segmentColors = [
    "#ECD662",
    "#5D8233",
    "#284E78",
    "#3E215D"
  ];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getDataPointsByYear();
    this.createSvg();
    this.render();
  }

  private parseParams(): void {
    this.year = Number(this.route.snapshot.paramMap.get("year"));
  }

  private getCountries(): void {
    this.dataService.getCountries().subscribe(data => this.countries = data);
  }

  private getDataPointsByYear(): void {
    this.dataService.getDataPointsByYear(this.year).subscribe(data => this.data = data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#stacked-bar")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);
  }

  private render(): void {
    const xScale = d3.scaleBand()
      .domain(this.countries)
      .range([0, this.width - this.margin.right])
      .padding(0.2);
    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, this.margin.top]);

    let xAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.height + this.margin.top)})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");
    let yAxis = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`)
      .call(d3.axisLeft(yScale));

    let g = this.svg.append("g")
      .attr("transform", `translate(${String(this.margin.left)},${String(this.margin.top)})`);

    // Apply X Axis label
    this.svg.append("text")
      .attr("transform", `translate(${this.width/2},${this.height + this.margin.top + 70})`)
      .style("text-anchor", "middle")
      .text("Country")
    // Apply Y Axis label
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - this.margin.left)
      .attr("x", 0 - (this.height/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("% of Income")

    let stacker = d3.stack().keys(this.incomeShareKeys)
    // @ts-ignore
    let stackData = stacker(this.data);
    console.log(stackData)
    let groups = g.selectAll("g.share")
      .data(stackData)
      .enter()
      .append("g")
      .style("fill", (d: any,i: number) => {return this.segmentColors[i];})

    groups.exit().remove();

    groups.transition().duration(500).attr("y", (d: any) => yScale(d.value));

    let rect = groups.selectAll("rect")
      .data((d: any) => {return d;})
      .enter()
      .append("a")
      .attr("href", (d: any) => `${window.location.origin}/country/${d.data.country}/year/${this.year}`)
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d: any) => xScale(d.data.country))
      .attr("width", (d: any) => xScale.bandwidth())
      .attr("y", (d: any) => yScale(d[1]))
      .attr("height", (d: any) => {return yScale(d[0]) - yScale(d[1])});
  }

}

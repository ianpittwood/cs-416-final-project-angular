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
  public aggregateData!: CountryYearDataPoint;
  public worldEvents: Array<string> = [];
  private data: CountryYearDataPoint[] = [];
  private countries: string[] = [];
  private svg: any;
  private margin = {top: 20, right: 40, bottom: 80, left: 50};
  private width = 500;
  private height = 500;
  private incomeShareKeys = ["incomeShareBot50", "incomeShareMid40", "incomeShareNext9", "incomeShareTop1"];
  private segmentColors = [
    "#ECD662",
    "#5D8233",
    "#284E78",
    "#3E215D"
  ];

  public isNotMinYear() {
    return (this.year - 1) >= 1980;
  }

  public isNotMaxYear() {
    return (this.year + 1) <= 2019;
  }

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.parseParams();
    this.getCountries();
    this.getAggregateDataByYear();
    this.getDataPointsByYear();
    this.getNarrativeEvents();
    this.createSvg();
    this.render();
  }

  ngOnChanges(): void {
    this.getDataPointsByYear();
    this.getAggregateDataByYear();
    this.getNarrativeEvents();
    this.getSvg();
    this.render();
  }

  private parseParams(): void {
    this.route.params.subscribe(params => {
      this.year = Number(params["year"]);
      this.ngOnChanges();
    })
  }

  private getCountries(): void {
    this.dataService.getCountries().subscribe(data => this.countries = data);
  }

  private getAggregateDataByYear(): void {
    this.dataService.getG20AggregateData(this.year).subscribe(data => this.aggregateData = data)
  }

  private getDataPointsByYear(): void {
    this.dataService.getDataPointsByYear(this.year).subscribe(data => this.data = data);
  }

  private getNarrativeEvents(): void {
    this.dataService.getWorldEventsForYear(this.year).subscribe(data => this.worldEvents = data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#stacked-bar")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);
  }

  private getSvg(): void {
    d3.selectAll("figure#stacked-bar > svg > *").remove();
    this.svg = d3.select("figure#stacked-bar").select("svg");
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
      .attr("transform", `translate(${this.width/2},${this.height + this.margin.top + 75})`)
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

    let colorScale = d3.scaleOrdinal()
      .domain(this.incomeShareKeys)
      .range(this.segmentColors);

    let tooltip = d3.select("div#chartRow").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    let tipMouseover = function(event: { clientX: number; clientY: number; }, d: any) {
      let html = `<strong>${d.data.country}</strong><br>
Total Population: ${(d.data.totalPopulation/1000000).toFixed(2)} million<br>
GDP: $${(d.data.gdp/1000000000).toFixed(2)} billion<br>
GDP per capita: $${d.data.gdpPerCapita.toFixed(2)}<br>
Top 1%: ${d.data.incomeShareTop1.toFixed(2)}%<br>
Next 9%: ${d.data.incomeShareNext9.toFixed(2)}%<br>
Middle 40%: ${d.data.incomeShareMid40.toFixed(2)}%<br>
Bottom 50%: ${d.data.incomeShareBot50.toFixed(2)}%<br>`;
      tooltip.html(html)
        .style("left", (event.clientX + 15) + "px")
        .style("top", (event.clientY) + "px")
        .transition()
        .duration(200)
        .style("opacity", 0.9);
    }

    let tipMouseout = function(d: CountryYearDataPoint) {
      tooltip.transition()
        .duration(300)
        .style("opacity", 0)
    }

    let stacker = d3.stack().keys(this.incomeShareKeys);
    // @ts-ignore
    let stackData = stacker(this.data);
    let groups = g.selectAll("g.share")
      .data(stackData)
      .enter()
      .append("g")
      .style("fill", (d: { key: string; }) => colorScale(d.key))

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
      .attr("height", (d: any) => {return yScale(d[0]) - yScale(d[1])})
      .on("mouseover", tipMouseover)
      .on("mouseout", tipMouseout);
  }

}

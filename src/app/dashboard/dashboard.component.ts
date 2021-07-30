import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChangeContext, Options} from "@angular-slider/ngx-slider";
import {IncomeShareDifference} from "../data";
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public value: number = 1980;
  public options: Options = {
    floor: 1980,
    ceil: 2019
  }
  public changeData!: IncomeShareDifference;

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

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getChangeData();
  }

  onYearChange(changeContext: ChangeContext) {
    this.getChangeData()
  }

  private getChangeData(): void {
    this.dataService.getG20AggregateChange(1980, this.value).subscribe(data => this.changeData = data);
  }

}

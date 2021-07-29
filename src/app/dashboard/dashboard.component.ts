import { Component, OnInit } from '@angular/core';
import {ChangeContext, Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public value: number = 1980;
  public options: Options = {
    floor: 1980,
    ceil: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }

  onYearChange(changeContext: ChangeContext) {
    console.log(this.value)
  }

}

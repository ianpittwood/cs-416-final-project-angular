import { Component } from '@angular/core';
import {NgbConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'income-inequality-project';
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = true;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryYearPieComponent } from './country-year-pie.component';

describe('CountryYearPieComponent', () => {
  let component: CountryYearPieComponent;
  let fixture: ComponentFixture<CountryYearPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryYearPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryYearPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

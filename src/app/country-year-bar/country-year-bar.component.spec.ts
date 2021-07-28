import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryYearBarComponent } from './country-year-bar.component';

describe('CountryYearBarComponent', () => {
  let component: CountryYearBarComponent;
  let fixture: ComponentFixture<CountryYearBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryYearBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryYearBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

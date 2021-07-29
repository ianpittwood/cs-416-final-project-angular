import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdpLineComponent } from './gdp-line.component';

describe('GdpLineComponent', () => {
  let component: GdpLineComponent;
  let fixture: ComponentFixture<GdpLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdpLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdpLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

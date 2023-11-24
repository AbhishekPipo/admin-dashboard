import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsChartComponent } from './lights-chart.component';

describe('LightsChartComponent', () => {
  let component: LightsChartComponent;
  let fixture: ComponentFixture<LightsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightsChartComponent]
    });
    fixture = TestBed.createComponent(LightsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

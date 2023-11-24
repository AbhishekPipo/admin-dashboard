import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyuseChartComponent } from './energyuse-chart.component';

describe('EnergyuseChartComponent', () => {
  let component: EnergyuseChartComponent;
  let fixture: ComponentFixture<EnergyuseChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyuseChartComponent]
    });
    fixture = TestBed.createComponent(EnergyuseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

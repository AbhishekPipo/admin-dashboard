import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsStatsComponent } from './charts-stats.component';

describe('ChartsStatsComponent', () => {
  let component: ChartsStatsComponent;
  let fixture: ComponentFixture<ChartsStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsStatsComponent]
    });
    fixture = TestBed.createComponent(ChartsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

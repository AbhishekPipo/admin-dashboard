import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calender123Component } from './calender123.component';

describe('Calender123Component', () => {
  let component: Calender123Component;
  let fixture: ComponentFixture<Calender123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calender123Component]
    });
    fixture = TestBed.createComponent(Calender123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

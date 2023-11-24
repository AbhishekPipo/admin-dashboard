import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotComponent } from './iot.component';

describe('IotComponent', () => {
  let component: IotComponent;
  let fixture: ComponentFixture<IotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotComponent]
    });
    fixture = TestBed.createComponent(IotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRateComponent } from './appointment-rate.component';

describe('AppointmentRateComponent', () => {
  let component: AppointmentRateComponent;
  let fixture: ComponentFixture<AppointmentRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

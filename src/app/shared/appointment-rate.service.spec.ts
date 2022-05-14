import { TestBed } from '@angular/core/testing';

import { AppointmentRateService } from './appointment-rate.service';

describe('AppointmentRateService', () => {
  let service: AppointmentRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

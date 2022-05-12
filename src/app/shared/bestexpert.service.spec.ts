import { TestBed } from '@angular/core/testing';

import { BestexpertService } from './bestexpert.service';

describe('BestexpertService', () => {
  let service: BestexpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestexpertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

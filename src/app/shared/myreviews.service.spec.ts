import { TestBed } from '@angular/core/testing';

import { MyreviewsService } from './myreviews.service';

describe('MyreviewsService', () => {
  let service: MyreviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyreviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

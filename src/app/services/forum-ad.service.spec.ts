import { TestBed } from '@angular/core/testing';

import { ForumAdService } from './forum-ad.service';

describe('ForumAdService', () => {
  let service: ForumAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

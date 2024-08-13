import { TestBed } from '@angular/core/testing';

import { NewestService } from './newest.service';

describe('NewestService', () => {
  let service: NewestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

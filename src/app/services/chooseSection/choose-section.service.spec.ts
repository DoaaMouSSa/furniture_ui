import { TestBed } from '@angular/core/testing';

import { ChooseSectionService } from './choose-section.service';

describe('ChooseSectionService', () => {
  let service: ChooseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

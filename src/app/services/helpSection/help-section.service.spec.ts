import { TestBed } from '@angular/core/testing';

import { HelpSectionService } from './help-section.service';

describe('HelpSectionService', () => {
  let service: HelpSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

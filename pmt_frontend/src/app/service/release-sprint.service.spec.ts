import { TestBed } from '@angular/core/testing';

import { ReleaseSprintService } from './release-sprint.service';

describe('ReleaseSprintService', () => {
  let service: ReleaseSprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseSprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

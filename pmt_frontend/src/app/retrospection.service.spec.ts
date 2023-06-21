import { TestBed } from '@angular/core/testing';

import { RetrospectionService } from './retrospection.service';

describe('RetrospectionService', () => {
  let service: RetrospectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrospectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

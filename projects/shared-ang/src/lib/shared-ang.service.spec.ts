import { TestBed } from '@angular/core/testing';

import { SharedAngService } from './shared-ang.service';

describe('SharedAngService', () => {
  let service: SharedAngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TransferInternalJourneyAngService } from './transfer-internal-journey-ang.service';

describe('TransferInternalJourneyAngService', () => {
  let service: TransferInternalJourneyAngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferInternalJourneyAngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AccountsSummaryCommonAngService } from './accounts-summary-common-ang.service';

describe('AccountsSummaryCommonAngService', () => {
  let service: AccountsSummaryCommonAngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsSummaryCommonAngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AccountsTransactionsJourneyAngService } from './accounts-transactions-journey-ang.service';

describe('AccountsTransactionsJourneyAngService', () => {
  let service: AccountsTransactionsJourneyAngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsTransactionsJourneyAngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

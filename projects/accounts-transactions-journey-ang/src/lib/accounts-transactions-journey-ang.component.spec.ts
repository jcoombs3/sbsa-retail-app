import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTransactionsJourneyAngComponent } from './accounts-transactions-journey-ang.component';

describe('AccountsTransactionsJourneyAngComponent', () => {
  let component: AccountsTransactionsJourneyAngComponent;
  let fixture: ComponentFixture<AccountsTransactionsJourneyAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsTransactionsJourneyAngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTransactionsJourneyAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsSummaryCommonAngComponent } from './accounts-summary-common-ang.component';

describe('AccountsSummaryCommonAngComponent', () => {
  let component: AccountsSummaryCommonAngComponent;
  let fixture: ComponentFixture<AccountsSummaryCommonAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsSummaryCommonAngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsSummaryCommonAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

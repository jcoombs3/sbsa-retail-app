import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInternalJourneyAngComponent } from './transfer-internal-journey-ang.component';

describe('TransferInternalJourneyAngComponent', () => {
  let component: TransferInternalJourneyAngComponent;
  let fixture: ComponentFixture<TransferInternalJourneyAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferInternalJourneyAngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInternalJourneyAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

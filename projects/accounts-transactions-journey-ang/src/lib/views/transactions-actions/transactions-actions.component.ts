import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {
  InquireAndDisputeTopics,
  Transaction,
  TransactionCheckImageResponse,
  TransactionDetailsService,
  TransactionsDetailsLoading,
} from '@backbase/transactions-common-ang';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AccountsTransactionsJourneyService } from '@backbase/accounts-transactions-journey-ang';

import { TransactionsHelperService } from '../../transactions-details-helper.service';

@Component({
  selector: 'sbsa-transactions-details',
  providers: [TransactionDetailsService],
  template: `
    <bb-modal-ui
      *ngIf="currentTransaction | async as transaction"
      [isOpen]="isDetailsOpen"
      (cancel)="closeDialog()"
      (confirm)="onConfirmDialog()"
    >
      <bb-modal-header-ui>
        <ng-template bbCustomModalHeader>
          <h3 class="modal-title">
            {{ transaction.counterPartyName }}: Transaction Actions
          </h3>
        </ng-template>
      </bb-modal-header-ui>
      <bb-modal-body-ui>
        <ng-template bbCustomModalBody>
          Are you sure you want to ...?
        </ng-template>
      </bb-modal-body-ui>
      <bb-modal-footer-ui
        cancelText="No"
        confirmText="Yes"
        (confirm)="closeDialog()"
      >
      </bb-modal-footer-ui>
    </bb-modal-ui>
  `,
})
export class TransactionActionsComponent implements OnInit, OnDestroy {
  isDetailsOpen = true;
  currentTransaction: Observable<Transaction | undefined> | undefined;
  private unsubscribeSubject = new Subject<void>();

  constructor(
    readonly config: AccountsTransactionsJourneyService,
    public shared: TransactionsHelperService,
    private readonly transactionDetailsService: TransactionDetailsService,
    cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.currentTransaction = this.shared.currentTransaction.pipe(
      tap((transaction) => {
        if (transaction) {
          this.transactionDetailsService.selectTransaction(transaction);
        }
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  closeDialog() {
    this.isDetailsOpen = false;
    this.shared.setCloseDetail();
  }

  onConfirmDialog() {
    this.closeDialog();
  }
}

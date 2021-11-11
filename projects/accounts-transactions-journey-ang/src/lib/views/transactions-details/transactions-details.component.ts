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
    <bb-transaction-details-modal
      *ngIf="currentTransaction | async as transaction"
      [isDetailsOpen]="isDetailsOpen"
      [transaction]="transaction"
      [showChangeCategory]="true"
      [checkImagesList]="checkImagesList"
      [transactionDetailsLoadingStatus]="transactionDetailsLoadingStatus"
      [inquireAndDisputeTopics]="inquireAndDisputeTopics"
      (close)="closeDialog()"
    ></bb-transaction-details-modal>
  `,
})
export class TransactionDetailsComponent implements OnInit, OnDestroy {
  checkImagesList: TransactionCheckImageResponse | undefined;
  transactionDetailsLoadingStatus: TransactionsDetailsLoading | undefined;
  isDetailsOpen = true;
  inquireAndDisputeTopics: InquireAndDisputeTopics;
  currentTransaction: Observable<Transaction | undefined> | undefined;
  private unsubscribeSubject = new Subject<void>();

  constructor(
    readonly config: AccountsTransactionsJourneyService,
    public shared: TransactionsHelperService,
    private readonly transactionDetailsService: TransactionDetailsService,
    cd: ChangeDetectorRef
  ) {
    this.transactionDetailsService
      .fromCheckImages(of(this.config.showCheckImages))
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((checkImagesList) => {
        this.checkImagesList = checkImagesList;
      });

    this.transactionDetailsService.fromInquiryAndDispute(
      of(config.enableDisputeAndInquiry),
      of(config.disputeByBillingStatus),
      of(config.disputeEligibilityDays),
      of(config.disputeTransactionTypes.split(','))
    );

    this.transactionDetailsService.loadingState
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((transactionDetailsLoadingStatus) => {
        this.transactionDetailsLoadingStatus = transactionDetailsLoadingStatus;
        cd.markForCheck();
      });

    this.transactionDetailsService
      .fromGeolocation(of(this.config.apiKey))
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe();

    this.inquireAndDisputeTopics = {
      inquire: this.config.inquireTopicId,
      dispute: this.config.disputeTopicId,
    };
  }

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
}

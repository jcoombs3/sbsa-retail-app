import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Transaction,
  TransactionDetailsService,
} from '@backbase/transactions-common-ang';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationAlertType, NotificationService } from '@backbase/ui-ang';

import { TransactionsHelperService } from '../../transactions-details-helper.service';

@Component({
  selector: 'sbsa-transactions-details',
  providers: [TransactionDetailsService],
  template: `
    <bb-modal-ui
      *ngIf="currentTransaction | async as transaction"
      [isOpen]="isDetailsOpen"
      (cancel)="onNoDialog()"
      (confirm)="onYesDialog()"
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
        (confirm)="onYesDialog()"
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
    public shared: TransactionsHelperService,
    private readonly transactionDetailsService: TransactionDetailsService,
    private readonly notificationService: NotificationService
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

  private closeDialog() {
    this.isDetailsOpen = false;
    this.shared.setCloseDetail();
  }

  onNoDialog() {
    this.notificationService.showNotification({
      header: 'Transaction Action No',
      message: `The notification triggered by clicking on No button.`,
      modifier: 'warning' as NotificationAlertType,
      dismissible: true,
    });
    this.closeDialog();
  }

  onYesDialog() {
    this.notificationService.showNotification({
      header: 'Transaction Action Yes',
      message: `The notification triggered by clicking on Yes button.`,
      modifier: 'success' as NotificationAlertType,
      dismissible: true,
    });
    this.closeDialog();
  }
}

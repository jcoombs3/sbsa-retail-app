import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Transaction,
  TransactionsList,
} from '@backbase/transactions-common-ang';
import { AccountsTransactionsJourneyService } from '@backbase/accounts-transactions-journey-ang';

import { TransactionsHelperService } from '../../transactions-details-helper.service';

@Component({
  selector: 'sbsa-transactions-list-view',
  templateUrl: './transactions-list.component.html',
})
export class TransactionsListComponent implements OnInit {
  constructor(
    readonly config: AccountsTransactionsJourneyService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly shared: TransactionsHelperService
  ) {
    this.shared.onCloseDetail.subscribe((event) => {
      if (event) {
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  getTransaction(transaction: Transaction) {
    this.shared.setTransactionId(transaction.id || '');
    this.router.navigate(['./detail', { transactionId: transaction.id }], {
      relativeTo: this.route,
    });
  }

  transactionsLoaded(transactionsList: TransactionsList | null) {
    if (transactionsList) {
      this.shared.setTransactions(transactionsList.items);
    }
  }

  ngOnInit() {
    if (
      this.route.snapshot.children[0] &&
      this.route.snapshot.children[0].params['transactionId']
    ) {
      this.shared.setTransactionId(
        this.route.snapshot.children[0].params['transactionId']
      );
    }
  }

  // Custom logic
  getActions(transaction: Transaction) {
    this.shared.setTransactionId(transaction.id || '');
    this.router.navigate(['./actions', { transactionId: transaction.id }], {
      relativeTo: this.route,
    });
  }
}

import { Component } from '@angular/core';
import { Transaction } from '@backbase/transactions-common-ang';
import { TransactionsListComponent } from '@backbase/accounts-transactions-journey-ang';

@Component({
  selector: 'sbsa-transactions-list-view',
  templateUrl: './transactions-list-extended.component.html',
})
export class TransactionsListExtendedComponent extends TransactionsListComponent {}

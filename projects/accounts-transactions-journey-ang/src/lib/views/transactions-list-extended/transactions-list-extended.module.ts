import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionsListWidgetModule } from '@backbase/retail-ang';
import { TransactionDetailsComponent } from '@backbase/accounts-transactions-journey-ang';

import { TransactionsListExtendedComponent } from './transactions-list-extended.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsListExtendedComponent,
        children: [
          {
            path: 'detail',
            component: TransactionDetailsComponent,
          },
          {
            path: 'actions',
            loadChildren: () =>
              import(
                '../transactions-actions/transactions-actions.module'
              ).then((m) => m.TransactionsActionsModule),
          },
        ],
      },
    ]),
    ReactiveFormsModule,
    TransactionsListWidgetModule,
  ],
  declarations: [TransactionsListExtendedComponent],
})
export class TransactionsListExtendedModule {}

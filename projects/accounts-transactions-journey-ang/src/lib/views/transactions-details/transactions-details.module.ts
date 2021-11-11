import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionsListWidgetModule } from '@backbase/transactions-list-widget-ang';
import { TransactionDetailsComponent } from './transactions-details.component';

@NgModule({
  declarations: [TransactionDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionDetailsComponent,
      },
    ]),
    TransactionsListWidgetModule,
  ],
})
export class TransactionsDetailsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionsListWidgetModule } from '@backbase/transactions-list-widget-ang';
import { TransactionActionsComponent } from './transactions-actions.component';

@NgModule({
  declarations: [TransactionActionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionActionsComponent,
      },
    ]),
    TransactionsListWidgetModule,
  ],
})
export class TransactionsActionsModule {}

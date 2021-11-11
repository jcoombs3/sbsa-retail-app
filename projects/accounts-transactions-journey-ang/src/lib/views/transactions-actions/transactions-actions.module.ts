import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionsListWidgetModule } from '@backbase/transactions-list-widget-ang';
import { NotificationModule } from '@backbase/ui-ang/notification';

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
    NotificationModule,
  ],
})
export class TransactionsActionsModule {}

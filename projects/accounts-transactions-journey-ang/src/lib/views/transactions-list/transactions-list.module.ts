import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionsListWidgetModule } from '@backbase/retail-ang';
import { ButtonModule } from '@backbase/ui-ang/button';
import { IconModule } from '@backbase/ui-ang/icon';

import { TransactionsListComponent } from './transactions-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsListComponent,
        children: [
          {
            path: 'detail',
            loadChildren: () =>
              import(
                '../transactions-details/transactions-details.module'
              ).then((m) => m.TransactionsDetailsModule),
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
    ButtonModule,
    IconModule,
  ],
  declarations: [TransactionsListComponent],
})
export class TransactionsListModule {}

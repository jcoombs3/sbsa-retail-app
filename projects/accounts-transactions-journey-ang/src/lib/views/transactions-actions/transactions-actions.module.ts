import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from '@backbase/ui-ang';
import { TransactionsActionsComponent } from './transactions-actions.component';

@NgModule({
  declarations: [TransactionsActionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsActionsComponent,
      },
    ]),
    ModalModule,
  ],
})
export class TransactionsActionsModule {}

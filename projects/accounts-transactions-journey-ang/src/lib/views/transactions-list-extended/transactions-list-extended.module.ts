import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { TransactionsListExtendedComponent } from './transactions-list-extended.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsListExtendedComponent,
      },
    ]),
  ],
  declarations: [TransactionsListExtendedComponent],
})
export class TransactionsListExtendedModule {}

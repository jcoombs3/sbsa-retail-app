import { NgModule } from '@angular/core';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import {
  AccountsTransactionsJourneyModule,
  AccountsTransactionsJourneyComponent,
  AccountsListComponent,
  AccountsManageComponent,
  AccountsManageGuardService,
  AccountsDetailsTabComponent,
  TransactionsListComponent,
  TransactionDetailsComponent,
  AccountsDetailsComponent,
} from '@backbase/accounts-transactions-journey-ang';

const extendedRoute = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      data: { title: 'My Accounts' },
      component: AccountsListComponent,
    },
    {
      path: 'manage',
      component: AccountsManageComponent,
      canActivate: [AccountsManageGuardService],
    },
    {
      path: 'transactions',
      component: AccountsDetailsTabComponent,
      data: { title: 'Transactions' },
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'list',
          component: TransactionsListComponent,
          data: { title: 'Transactions' },
          children: [
            {
              path: 'detail',
              component: TransactionDetailsComponent,
            },
          ],
        },
        {
          path: 'details',
          component: AccountsDetailsComponent,
          data: { title: 'Details' },
        },
      ],
    },
  ],
};

@NgModule({
  declarations: [],
  imports: [
    AccountsTransactionsJourneyModule.forRoot({ route: extendedRoute }),
  ],
  exports: [],
  providers: [
    // extension slot dependency (WA3)
    TemplateRegistry,
  ],
})
export class AccountsTransactionsJourneyAngModule {}

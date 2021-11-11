import { NgModule } from '@angular/core';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import {
  AccountsTransactionsJourneyModule,
  AccountsTransactionsJourneyComponent,
  AccountsManageComponent,
  AccountsManageGuardService,
  AccountsDetailsTabComponent,
  AccountsDetailsComponent,
} from '@backbase/accounts-transactions-journey-ang';
import { TransactionsHelperService } from './transactions-details-helper.service';

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
      loadChildren: () =>
        import(
          './views/accounts-list-extended/accounts-list-extended.module'
        ).then((m) => m.AccountsListExtendedModule),
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
          data: { title: 'Transactions' },
          loadChildren: () =>
            import('./views/transactions-list/transactions-list.module').then(
              (m) => m.TransactionsListModule
            ),
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
    TransactionsHelperService,
    // extension slot dependency (WA3)
    TemplateRegistry,
  ],
})
export class AccountsTransactionsJourneyAngModule {}

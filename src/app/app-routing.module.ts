import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-accounts',
    loadChildren: () =>
      import(
        './accounts-transactions/accounts-transactions-journey-bundle.module'
      ).then((m) => m.AccountsTransactionsJourneyBundleModule),
  },
  {
    path: 'statements',
    loadChildren: () =>
      import(
        './accounts-statements/accounts-statements-journey-bundle.module'
      ).then((m) => m.AccountsStatementsJourneyBundleModule),
  },
  {
    path: '**',
    redirectTo: 'my-accounts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'my-accounts',
    loadChildren: () =>
      import(
        './accounts-transactions/accounts-transactions-journey-bundle.module'
      ).then((m) => m.AccountsTransactionsJourneyBundleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'statements',
    loadChildren: () =>
      import(
        './accounts-statements/accounts-statements-journey-bundle.module'
      ).then((m) => m.AccountsStatementsJourneyBundleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'transfers',
    loadChildren: () =>
      import('./transfers/transfers-journey-bundle.module').then(
        (m) => m.TransfersJourneyBundleModule
      ),
    canActivate: [AuthGuard],
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PayordStopChecksListWidgetAngComponent } from '@backbase/payord-stop-checks-list-widget-ang';
import { PayordOmniPaymentWidgetAngComponent } from '@backbase/payord-omni-payment-widget-ang';

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
    path: 'stop-checks',
    loadChildren: () =>
      import('./stop-checks/stop-checks-journey-bundle.module').then(
        (m) => m.StopChecksJourneyBundleModule
      ),
    canActivate: [AuthGuard],
  },
  //  {
  //    path: 'transfers',
  //    component: PayordOmniPaymentWidgetAngComponent,
  //    canActivate: [AuthGuard],
  //  },
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

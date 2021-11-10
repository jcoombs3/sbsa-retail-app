import { NgModule } from '@angular/core';
import { providers } from './config.providers';

import { AccountsTransactionsJourneyAngModule } from '@sbsa/accounts-transactions-journey-ang';

@NgModule({
  imports: [AccountsTransactionsJourneyAngModule],
  providers: [...providers],
})
export class AccountsTransactionsJourneyBundleModule {}

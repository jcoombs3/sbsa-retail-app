import { NgModule } from '@angular/core';
import { providers } from '../accounts-transactions/config.providers';

import { AccountsTransactionsJourneyAngModule } from '@sbsa/accounts-transactions-journey-ang';

@NgModule({
  imports: [AccountsTransactionsJourneyAngModule],
  providers: [...providers],
})
export class TransfersJourneyBundleModule {}

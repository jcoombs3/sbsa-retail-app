import { NgModule, Provider } from '@angular/core';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { AccountsTransactionsJourneyModule } from '@backbase/accounts-transactions-journey-ang';
import { providers } from './config.providers';

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [
    ...providers,
    // extension slot dependency (WA3)
    TemplateRegistry,
  ],
})
export class AccountsTransactionsJourneyBundleModule {}

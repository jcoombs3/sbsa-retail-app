import { NgModule } from '@angular/core';
import { TemplateRegistry, ItemModel } from '@backbase/foundation-ang/core';
import { AccountStatementRetailJourneyModule } from '@backbase/account-statement-retail-journey-ang';
import { of } from 'rxjs';
import { PUBSUB, CONDITIONS } from '@backbase/foundation-ang/web-sdk';

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    console.log('++ CustomItemModel.property', propertyName);
    return of('');
  }
}

export class CustomConditions {
  constructor() {}

  resolveEntitlements(triplets: string) {
    console.log('++ CustomConditions.resolveEntitlements', triplets);
    if (triplets === 'AccountStatements.ManageStatements.view') {
      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
}

@NgModule({
  imports: [AccountStatementRetailJourneyModule.forRoot()],
  providers: [
    TemplateRegistry,
    {
      provide: ItemModel,
      useClass: CustomItemModel,
    },
    {
      provide: CONDITIONS,
      useClass: CustomConditions,
    },
  ],
})
export class AccountsStatementsJourneyBundleModule {}

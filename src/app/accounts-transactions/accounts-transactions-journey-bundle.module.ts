import { NgModule } from "@angular/core";
import { TemplateRegistry, ItemModel } from "@backbase/foundation-ang/core";
import { AccountsTransactionsJourneyModule } from "@backbase/accounts-transactions-journey-ang";
import { of } from "rxjs";

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    return of("");
  }
}

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [TemplateRegistry, 
    {
      provide: ItemModel,
      useClass: CustomItemModel
    }],
})
export class AccountsTransactionsJourneyBundleModule {}

import { NgModule, Provider } from "@angular/core";
import { TemplateRegistry, ItemModel } from "@backbase/foundation-ang/core";
import {
  AccountsTransactionsJourneyModule,
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken
} from "@backbase/accounts-transactions-journey-ang";
import { of } from "rxjs";
import { PUBSUB } from "@backbase/foundation-ang/web-sdk";

export const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
    enableManageAccounts: false
  }
};

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    console.log('++ CustomItemModel.property', propertyName);
    return of("");
  }
}

export class CustomPubsub {
  subscriptions = {} as any;

  constructor() {}

  publish(eventName: string, data: any) {
    console.log("++ CustomPubsub.publish", eventName);
    if (this.subscriptions[eventName]) {
      this.subscriptions[eventName].forEach(function(listener: any) {
        listener(data);
      });
    }
  }

  subscribe(eventName: string, listener: any) {
    console.log("++ CustomPubsub.subscribe", eventName);
    this.subscriptions[eventName] = this.subscriptions[eventName] || [];
    this.subscriptions[eventName].push(listener);
  }

  unsubscribe(eventName: string, listener: any) {
    console.log("++ CustomPubsub.unsubscribe", eventName);
    const eventListeners = this.subscriptions[eventName];
    if (eventListeners) {
      eventListeners.splice(eventListeners.indexOf(listener), 1);
    }
  }
}

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [
    // journey config
    AccountsTransactionsConfigProvider,
    // extension slot dependency (WA3)
    TemplateRegistry,
    // fake portal dependency (WA3)
    {
      provide: ItemModel,
      useClass: CustomItemModel
    },
    // fake web-sdk service
    {
      provide: PUBSUB,
      useClass: CustomPubsub
    }
  ]
})
export class AccountsTransactionsJourneyBundleModule {}

import { NgModule } from "@angular/core";
import { TemplateRegistry, ItemModel } from "@backbase/foundation-ang/core";
import { AccountsTransactionsJourneyModule } from "@backbase/accounts-transactions-journey-ang";
import { of } from "rxjs";
import { PUBSUB } from "@backbase/foundation-ang/web-sdk";

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    return of("");
  }
}

export class CustomPubsub {
  subscriptions = {} as any;

  constructor() {}

  publish(eventName: string, data: any) {
    console.log('++ eventName', eventName);
    if (this.subscriptions[eventName]) {
      this.subscriptions[eventName].forEach(function(listener: any) {
        listener(data);
      });
    }
  }
  
  subscribe(eventName: string, listener: any) {
    console.log('++ subscribe', eventName);
    this.subscriptions[eventName] = this.subscriptions[eventName] || [];
    this.subscriptions[eventName].push(listener);
  }
  
  unsubscribe(eventName: string, listener: any) {
    console.log('++ unsubscribe', eventName);
    const eventListeners = this.subscriptions[eventName];
    if (eventListeners) {
      eventListeners.splice(eventListeners.indexOf(listener), 1);
    }
  }
}

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [
    TemplateRegistry,
    {
      provide: ItemModel,
      useClass: CustomItemModel
    },
    {
      provide: PUBSUB,
      useClass: CustomPubsub
    }
  ]
})
export class AccountsTransactionsJourneyBundleModule {}

import { NgModule } from '@angular/core';
import { ItemModel } from '@backbase/foundation-ang/core';
import { of } from 'rxjs';

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    console.log('++ TransfersInternal CustomItemModel.property', propertyName);
    return of('');
  }
}

@NgModule({
  imports: [],
  providers: [
    {
      provide: ItemModel,
      useClass: CustomItemModel,
    },
  ],
})
export class TransfersInternalJourneyBundleModule {}

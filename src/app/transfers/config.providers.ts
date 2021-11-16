import { Provider } from '@angular/core';
import { ItemModel } from '@backbase/foundation-ang/core';
import { of } from 'rxjs';

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    //console.log('++ CustomItemModel.property', propertyName);
    return of('');
  }
}

export const providers = [
  // fake portal dependency (WA3)
  {
    provide: ItemModel,
    useClass: CustomItemModel,
  }
];

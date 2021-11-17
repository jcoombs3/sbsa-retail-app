import { Provider } from '@angular/core';
import { ItemModel } from '@backbase/foundation-ang/core';
import { of } from 'rxjs';

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    console.log('++ TransferCustomItemModel.property', propertyName);
    switch (propertyName) {
      case 'resourceName':
        return of('Payments');
        break;
      case 'businessFunction':
        return of('Stop Checks');
        break;
      case 'privilege':
        return of('create');
        break;
      case 'notificationDismissTime':
        return of('3');
        break;
      case 'currencies':
        return of('USD');
        break;
      case 'checksRangeNumber':
        return of('0');
        break;
      default:
        return of(undefined);
    }
  }
}

export const providers = [
  // fake portal dependency (WA3)
  {
    provide: ItemModel,
    useClass: CustomItemModel,
  },
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PayordOmniPaymentWidgetAngModule } from '@backbase/retail-ang/payment-order';
import { US_DOMESTIC_WIRE } from '@backbase/retail-ang/payment-configs';

import { TransfersJourneyAngComponent } from './transfers-journey-ang.component';

@NgModule({
  declarations: [TransfersJourneyAngComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { TransfersJourneyAngComponent },
    }),
    PayordOmniPaymentWidgetAngModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TransfersJourneyAngComponent,
      },
    ]),
  ],
})
export class TransfersJourneyAngModule {}

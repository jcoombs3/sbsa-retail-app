import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PayordStopChecksWidgetAngModule } from '@backbase/payord-stop-checks-widget-ang';
import { providers } from './config.providers';
import { TransferInternalJourneyAngComponent } from './transfer-internal-journey-ang.component';

@NgModule({
  declarations: [TransferInternalJourneyAngComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { TransferInternalJourneyAngComponent },
    }),
    PayordStopChecksWidgetAngModule,
  ],
  exports: [TransferInternalJourneyAngComponent],
  providers: [...providers],
})
export class TransferInternalJourneyAngModule {}

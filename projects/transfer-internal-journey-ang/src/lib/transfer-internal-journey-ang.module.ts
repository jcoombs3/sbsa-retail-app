import { NgModule } from '@angular/core';
import { PayordStopChecksWidgetAngModule } from '@backbase/payord-stop-checks-widget-ang';
import { providers } from './config.providers';
import { TransferInternalJourneyAngComponent } from './transfer-internal-journey-ang.component';

@NgModule({
  declarations: [TransferInternalJourneyAngComponent],
  imports: [PayordStopChecksWidgetAngModule],
  exports: [TransferInternalJourneyAngComponent],
  providers: [...providers],
})
export class TransferInternalJourneyAngModule {}

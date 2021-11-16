import { NgModule } from '@angular/core';
import { providers } from './config.providers';
import { TransfersJourneyAngModule } from '@sbsa/transfers-journey-ang';

@NgModule({
  imports: [TransfersJourneyAngModule],
  providers: [...providers]
})
export class TransfersJourneyBundleModule {}

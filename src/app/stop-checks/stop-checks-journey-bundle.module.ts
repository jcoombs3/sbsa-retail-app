import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PayordStopChecksListWidgetAngModule,
  PayordStopChecksListWidgetAngComponent,
} from '@backbase/payord-stop-checks-list-widget-ang';

@NgModule({
  imports: [
    PayordStopChecksListWidgetAngModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PayordStopChecksListWidgetAngComponent,
      },
    ]),
  ],
})
export class StopChecksJourneyBundleModule {}

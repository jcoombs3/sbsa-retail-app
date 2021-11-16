import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransfersJourneyAngComponent } from './transfers-journey-ang.component';

@NgModule({
  declarations: [TransfersJourneyAngComponent],
  imports: [
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

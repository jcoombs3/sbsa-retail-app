import { Component, OnInit } from '@angular/core';
import { CopyRoutes } from '@backbase/foundation-ang/core';
import { PayordStopChecksWidgetAngComponent } from '@backbase/payord-stop-checks-widget-ang';

@Component({
  selector: 'lib-transfer-internal-journey-ang',
  template: `
    <p>
      transfer-internal-journey-ang works!
    </p>
    <bb-payord-stop-checks-widget-ang></bb-payord-stop-checks-widget-ang>
  `,
  styles: [],
})
@CopyRoutes(PayordStopChecksWidgetAngComponent)
export class TransferInternalJourneyAngComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-transfers-journey-ang',
  template: `
    <p>
      transfers-journey-ang works!
    </p>
    <bb-payord-omni-payment-widget-ang></bb-payord-omni-payment-widget-ang>
  `,
  styles: [],
})
export class TransfersJourneyAngComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

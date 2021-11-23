import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-ang',
  template: `
    <p>
      shared-ang works!
    </p>
  `,
  styles: [
  ]
})
export class SharedAngComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

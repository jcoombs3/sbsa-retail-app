import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-transactions-actions',
  templateUrl: './transactions-actions.component.html',
})
export class TransactionsActionsComponent implements OnInit {
  showDialog = false;

  constructor() {}

  ngOnInit(): void {}

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
}

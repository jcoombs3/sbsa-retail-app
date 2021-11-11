import { Injectable } from '@angular/core';
import { Transaction } from '@backbase/transactions-common-ang';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class TransactionsHelperService {
  private transactionIdSubject = new BehaviorSubject<string>('');
  private transactionsSubject = new BehaviorSubject<Transaction[] | undefined>(
    undefined
  );
  private onCloseDetailSubject = new Subject<boolean>();

  currentTransaction = this.transactionIdSubject.pipe(
    mergeMap((id) =>
      this.transactionsSubject.pipe(
        map((transaction) => transaction?.find((x) => id === x.id))
      )
    )
  );
  onCloseDetail: Observable<boolean> = this.onCloseDetailSubject.asObservable();

  setCloseDetail() {
    this.onCloseDetailSubject.next(true);
  }

  setTransactions(transactions: Transaction[]) {
    this.transactionsSubject.next(transactions);
  }

  setTransactionId(transactionId: string) {
    this.transactionIdSubject.next(transactionId);
  }
}

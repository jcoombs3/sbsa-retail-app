import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';
import { ProductSummaryListWidgetModule } from '@backbase/product-summary-list-widget-ang';
import { SbsaHeaderModule } from '@sbsa/shared-ang';

import { ProductItemDropdownModule } from '../../ui/product-item-dropdown/product-item-dropdown.module';
import { AccountsListExtendedComponent } from './accounts-list-extended.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountsListExtendedComponent,
      },
    ]),
    SbsaHeaderModule,
    HeadingWidgetModule,
    ProductSummaryListWidgetModule,
    ProductItemDropdownModule,
  ],
  declarations: [AccountsListExtendedComponent],
})
export class AccountsListExtendedModule {}

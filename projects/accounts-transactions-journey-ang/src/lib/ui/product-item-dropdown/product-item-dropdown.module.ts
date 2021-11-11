import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuModule, ButtonModule } from '@backbase/ui-ang';

import { ProductItemDropdownComponent } from './product-item-dropdown.component';

@NgModule({
  declarations: [ProductItemDropdownComponent],
  imports: [CommonModule, DropdownMenuModule, ButtonModule],
  exports: [ProductItemDropdownComponent],
})
export class ProductItemDropdownModule {}

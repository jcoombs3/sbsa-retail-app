import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';
import { IconModule } from '@backbase/ui-ang';
import { SbsaHeaderComponent } from './header.component';

@NgModule({
  declarations: [SbsaHeaderComponent],
  imports: [CommonModule, HeadingWidgetModule, IconModule],
  exports: [SbsaHeaderComponent],
})
export class SbsaHeaderModule {}

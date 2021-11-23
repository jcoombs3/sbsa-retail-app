import {
  Component,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'sbsa-header-ui',
  templateUrl: './header.component.html',
})
export class SbsaHeaderComponent implements AfterViewInit {
  private hardcodedCustomClassName = 'py-0';

  @Input() heading = '';
  @Input() headingType = 'h1';
  @Input() customClassName = '';
  @Input() buttonTitle = '';
  @Input() iconClasses = '';
  @Input() buttonClasses = '';
  @Output() buttonAction = new EventEmitter<string>();

  constructor() {}

  ngAfterViewInit() {
    this.customClassName = (
      this.customClassName + ` ${this.hardcodedCustomClassName}`
    ).trim();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbsa-product-item-dropdown-ui',
  templateUrl: './product-item-dropdown.component.html',
})
export class ProductItemDropdownComponent implements OnInit {
  dropdownMenuOptions = [
    { name: 'Stock', id: 'stock' },
    { name: 'Bond', id: 'bonds' },
    { name: 'Liquid Assets', id: 'liquidassets' },
    { name: 'Real Estate', id: 'realestate' },
    { name: 'Cash', id: 'cash' },
  ];

  constructor() {}

  ngOnInit(): void {}

  doDropdownAction(name?: string) {
    window.alert(`Dropdown option ${name ? name : 'Transfer'} selected`);
  }
}

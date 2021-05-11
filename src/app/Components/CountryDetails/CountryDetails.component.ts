import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-CountryDetails',
  templateUrl: './CountryDetails.component.html',
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Details';
  errorMessage = '';
  _parent: FormGroup;
  get parent(): FormGroup {
    return this._parent;
  }
  @Input('parent')
  set parent(value: FormGroup) {
    this._parent = value;
  }

  ngOnDestroy(): void {}
  constructor() {}
  ngOnInit(): void {}
  onSubmit(): void {}
}

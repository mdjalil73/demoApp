import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Currencies',
  templateUrl: './Currencies.component.html',
})
export class CurrenciesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {}
  _parent: FormGroup;
  get parent(): FormGroup {
    return this._parent;
  }
  @Input('parent')
  set parent(value: FormGroup) {
    this._parent = value;
  }
  constructor() {}
  ngOnInit(): void {}
}

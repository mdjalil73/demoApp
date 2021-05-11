import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Select } from '../../Models/select';

@Component({
  selector: 'app-select',
  templateUrl: './Select.component.html',
  styleUrls: ['./Select.component.scss'],
})
export class SelectComponent implements OnInit {
  generalControl: FormControl = new FormControl();
  @Input('control') control: FormControl;
  @Input('source') source: Select[];
  @Input('name') name = '';
  @Input('defaultOption') defaultOption?: string;

  @Output() PropertyUpdate = new EventEmitter<boolean>();
  @Output() ChangeEmmit = new EventEmitter<number>();

  constructor() {}
  ngOnChanges(): void {}
  ngOnInit(): void {}
  onChange(event: any) {
    this.ChangeEmmit.emit(event);
  }
  // controlName(): string {
  //   const controlName = this.getControlName(this.control);
  //   return controlName;
  // }
  // getControlName(c: AbstractControl): string | null {
  //   const formGroup = c.parent.controls;
  //   return Object.keys(formGroup).find((name) => c === formGroup[name]) || null;
  // }
  public hasError = (errorName: string) => {
    console.log(this.control.errors);
    return this.control.hasError(errorName);
  };
}

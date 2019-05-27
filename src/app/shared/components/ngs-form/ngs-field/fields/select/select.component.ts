import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() settings: any;
  @Input() control: FormGroup;
  @Output() value = new EventEmitter<object>();
  @Output() isTouched = new EventEmitter<boolean>();

  isFocused = false;
  hasError = false;

  constructor() { }

  ngOnInit() {
    this.settings.classes = 'field field-' + this.settings.type;
    this.moveLabel({
      type: 'load',
      value: this.settings.value
    });
  }

  moveLabel(event: any) {
    if (event.type === 'focus' || (event.type === 'load' && event.value)) {
      this.isFocused = true;
    } else {
      if (event.target && event.target.value) {
        this.isFocused = true;
      } else {
        this.isFocused = false;
      }
    }
  }

  transmitValue(event: any) {
    this.value.emit({
      key: this.settings.id,
      value: event.target.value
    });
  }

  validateField(event: any) {
    const field = this.control.controls[this.settings.id];
    this.hasError = false;

    if (field.errors) {
      this.hasError = true;
    }
  }

  fieldIsTouched() {
    this.isTouched.emit(true);
  }

}

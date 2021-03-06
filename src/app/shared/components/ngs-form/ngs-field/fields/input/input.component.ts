import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() settings: any;
  @Input() control: FormGroup;
  @Output() value = new EventEmitter<object>();
  @Output() isTouched = new EventEmitter<boolean>();

  isFocused = false;

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

  fieldIsTouched() {
    this.isTouched.emit(true);
  }

}

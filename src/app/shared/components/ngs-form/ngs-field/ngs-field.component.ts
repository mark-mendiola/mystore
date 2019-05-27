import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ngs-field',
  templateUrl: './ngs-field.component.html',
  styleUrls: ['./ngs-field.component.scss']
})
export class NgsFieldComponent implements OnInit {

  @Input() control: FormGroup;
  @Input() field: any;
  @Output() value = new EventEmitter<object>();
  @Input() hasReset = false;

  hasError = false;

  faInfoCircle = faInfoCircle;

  constructor() {
  }

  ngOnInit() {
    this.control.controls[this.field.id].setValue(this.field.value);
  }

  transmitValue(value: any) {
    this.value.emit(value);
  }

  validateField() {
    const field = this.control.controls[this.field.id];
    this.hasError = false;

    if (field.errors) {
      this.hasError = true;
    }
  }

}

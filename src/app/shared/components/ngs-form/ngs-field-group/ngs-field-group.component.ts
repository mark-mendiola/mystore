import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngs-field-group',
  templateUrl: './ngs-field-group.component.html',
  styleUrls: ['./ngs-field-group.component.scss']
})
export class NgsFieldGroupComponent implements OnInit {

  @Input() name: string;
  @Input() group: FormGroup;
  @Input() fields: any;
  @Output() value = new EventEmitter<object>();
  @Input() hasReset = false;

  constructor() { }

  ngOnInit() {
  }

  isArray(value: any) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  isObject(value: any) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  transmitValue(value: any) {
    this.value.emit(value);
  }

}

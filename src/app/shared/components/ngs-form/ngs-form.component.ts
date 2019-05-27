import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-ngs-form',
  templateUrl: './ngs-form.component.html',
  styleUrls: ['./ngs-form.component.scss']
})
export class NgsFormComponent implements OnInit {

  @Input() id = '';
  @Input() fields = [];
  @Input() actions = [];
  @Input() isDone = false;
  @Output() data = new EventEmitter<object>();
  @Output() callbackEmitter = new EventEmitter<any>();
  @Output() hasReset = new EventEmitter<boolean>();

  rawData = {};

  ngsForm = this.fb.group({ });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.fields) {
      this.prepareForm();
    }
  }

  prepareForm() {
    let fields = {};

    fields = this.prepareFields(this.fields);
    this.prepareActions();

    this.ngsForm = this.fb.group(fields);
  }

  prepareFields(group: any) {
    const fields = {};

    group.forEach((fieldOrGroup, index) => {
      if (this.isArray(fieldOrGroup)) {
        fields['fieldGroup_' + index] = this.fb.group(
          this.prepareFields(fieldOrGroup)
        );
      } else {
        fields[fieldOrGroup.id + '_wrap'] = this.fb.group({
          [fieldOrGroup.id]: ['', this.fieldValidators(fieldOrGroup)]
        });
      }
    });

    return fields;
  }

  prepareActions() {
    if (this.actions) {
      this.actions.forEach((action: any, index: number) => {
        let classes = '';

        if (action.isPrimary) {
          classes += ' btn-primary';
        }

        if (action.icon) {
          classes += ' has-icon';

          if (action.iconLocation) {
            classes += ' icon-' + action.iconLocation;
          }
        }

        if (action.classes) {
          classes += ' ' + action.classes;
        }

        this.actions[index].classes = classes;
      });
    }
  }

  fieldValidators(field: any) {
    let validations: any = [];
    let fieldValidations: any;

    const reservedValidations = [
      'email', 'pattern', 'nullValidator', 'min',
      'max', 'minLength', 'maxLength', 'required',
      'requiredTrue', 'compose', 'composeAsync'
    ];

    if (field.validations) {
      fieldValidations = field.validations;

      if (this.isArray(fieldValidations)) {

        fieldValidations.forEach((validation: any) => {

          if (this.isString(validation)) {

            if (reservedValidations.indexOf(validation)) {
              validations.push(Validators[validation]);
            }

          } else if (this.isFunction(validation)) {
              validations.push(validation);
          }

        });

      } else if (this.isString(fieldValidations)) {

        if (reservedValidations.indexOf(fieldValidations)) {
          validations = Validators[fieldValidations];
        }

      } else if (this.isFunction(fieldValidations)) {

        if (reservedValidations.indexOf(fieldValidations)) {
          validations = fieldValidations;
        }

      }

    }

    return validations;
  }

  isArray(value: any) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  isFunction(value: any) {
    return typeof value === 'function';
  }

  isObject(value: any) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  isString(value: any) {
    return typeof value === 'string';
  }

  transmitData(data: any) {
    const field: any = this.getField(data.key);
    let id = data.key;

    if (typeof field.dataID !== undefined) {
      id = field.dataID;
    }

    this.rawData[id] = data.value;
    this.data.emit(this.rawData);
  }

  getField(id: string, fields: any = this.fields) {
    let fieldData = {};

    fields.forEach((field: any, index: number) => {
      if (this.isArray(field)) {
        field = this.getField(id, field);
      }

      if (field.id === id) {
        fieldData = field;
      }
    });

    return fieldData;
  }

  triggerCallback(event: any, callbacks: any) {
    this.callbackEmitter.emit(callbacks[event.type]);
  }

  clearForm() {
    if (this.isDone === true) {
      this.ngsForm.reset();
      this.isDone = false;
      this.hasReset.emit(true);
    }
  }

}

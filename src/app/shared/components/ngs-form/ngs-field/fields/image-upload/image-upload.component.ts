import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Input() settings: any;
  @Input() control: FormGroup;
  @Output() value = new EventEmitter<object>();

  tempImage: any;

  isFocused = false;

  constructor() { }

  ngOnInit() {
    this.settings.classes = 'field field-' + this.settings.type;
    this.tempImage = this.settings.value;
  }

  hasImage(): boolean {
    return this.tempImage !== '' && this.tempImage !== undefined;
  }

  setImage(data: any) {
    const reader = new FileReader();
    const files = data.target.files;

    reader.readAsDataURL(files[0]);

    reader.onload = (event) => {
      this.tempImage = reader.result;
      this.transmitValue();
    };

  }

  transmitValue() {
    this.value.emit({
      key: this.settings.id,
      value: this.tempImage
    });
  }

}

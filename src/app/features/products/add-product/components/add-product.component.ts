import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AddProductService } from '../services/add-product.service';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  pageTitle = 'Add Product';

  headerOptions = [];

  fields = [];

  product: any = {
    name: '',
    price: 0,
    image: '',
    categoryId: 0,
    desc: ''
  };

  productCategories = [];
  productCategoryOptions = [];

  faCheck = faCheck;
  faTimes = faTimes;

  constructor(
    private aps: AddProductService,
    private loc: Location
  ) {}

  ngOnInit() {
    this.setHeaderOptions();
    this.prepareFields();
    this.getProductCategories('reInit');
  }

  reInit() {
    this.prepareFields();
  }

  setHeaderOptions(): void {
    this.headerOptions = [
      {
        text: 'Cancel',
        type: 'button',
        icon: faTimes,
        iconLocation: 'left',
        callback: {
          click: 'goBack'
        }
      },
      {
        text: 'Create',
        type: 'button',
        isPrimary: true,
        icon: faCheck,
        iconLocation: 'left',
        callback: {
          click: 'addProduct'
        }
      }
    ];
  }

  prepareFields(): void {
    this.fields = [
      [
        {
          id: 'productImage',
          dataID: 'image',
          type: 'image-upload',
          label: 'Select an image',
          value: ''
        },
      ],
      [
        {
          id: 'productName',
          dataID: 'name',
          type: 'text',
          label: 'Product Name',
          value: '',
          validations: [
            'required',
          ]
        },
        {
          id: 'productPrice',
          dataID: 'price',
          type: 'number',
          label: 'Price',
          value: '',
          validations: [
            this.isValidCurrencyFormat,
          ]
        },
        {
          id: 'productCategory',
          dataID: 'categoryId',
          type: 'select',
          label: 'Product Category',
          options: this.productCategoryOptions
        },
        {
          id: 'productDesc',
          dataID: 'desc',
          type: 'textarea',
          label: 'Product Description',
          value: ''
        }
      ]
    ];
  }

  getProductCategories(callback: string = ''): void {
    this.aps.getProductCategories().subscribe(
      productCategories => {
        this.productCategories = productCategories;

        productCategories.forEach((category, index) => {
          this.productCategoryOptions.push({
            text: category.name,
            value: category.id,
          });
        });

        if (callback) {
          this[callback]();
        }
      }
    );
  }

  executeCallback(callback: string, data: any = '') {
    this[callback](data);
  }

  isValidCurrencyFormat: ValidatorFn = (control: AbstractControl): {[key: string]: any } | null => {
    const value = control.value.match(/^((\.)?|(\d+)|(\d{1,3})(,\d{1,3})*)(\.\d{1,})?$/g);

    return !value[0] ? { isValidCurrency: true } : null;
  }

  setData(data: object) {
    this.product = data;
  }

  addProduct(): void {
    if (!this.product.name) { return; }

    this.aps.addProduct(this.product)
      .subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.loc.back();
  }

}

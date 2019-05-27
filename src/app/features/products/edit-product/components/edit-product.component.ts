import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Product, ProductProperties } from '../../components/product';
import { EditProductService } from '../../edit-product/services/edit-product.service';
import { ActivatedRoute } from '@angular/router';

import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;

  pageTitle = 'Edit ';

  headerOptions: any;

  fields: any;

  productCategories = [];
  productCategoryOptions = [];

  faSave = faSave;
  faTimes = faTimes;

  constructor(
    private route: ActivatedRoute,
    private eps: EditProductService,
    private loc: Location,
  ) {
  }

  ngOnInit() {
    this.getProduct();
    this.setHeaderOptions();
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
        text: 'Save',
        type: 'button',
        isPrimary: true,
        icon: faSave,
        iconLocation: 'left',
        callback: {
          click: 'updateProduct'
        }
      }
    ];
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.eps.getProduct(id).subscribe(
      product => {
        this.pageTitle += product.name;
        this.product = product;
        this.prepareFields();
        this.getProductCategories();
      }
    );
  }

  getProductCategories(): void {
    this.eps.getProductCategories().subscribe(
      productCategories => {
        this.productCategories = productCategories;

        productCategories.forEach((category, index) => {
          this.productCategoryOptions.push({
            text: category.name,
            value: category.id,
          });
        });

        this.prepareFields();
      }
    );
  }

  prepareFields(): void {
    let product = this.product;

    if (!product) {
      product = new Product();
    }

    this.fields = [
      [
        {
          id: 'productImage',
          dataID: 'image',
          type: 'image-upload',
          label: 'Select an image',
          value: product.image
        },
      ],
      [
        {
          id: 'productName',
          dataID: 'name',
          type: 'text',
          label: 'Product Name',
          value: product.name,
          validations: [
            'required'
          ]
        },
        {
          id: 'productPrice',
          dataID: 'price',
          type: 'number',
          label: 'Price',
          value: product.price,
          validations: [
            this.isValidCurrencyFormat,
          ]
        },
        {
          id: 'productCategory',
          dataID: 'categoryId',
          type: 'select',
          label: 'Product Category',
          options: this.productCategoryOptions,
          value: product.categoryId
        },
        {
          id: 'productDesc',
          dataID: 'desc',
          type: 'textarea',
          label: 'Product Description',
          value: product.desc
        }
      ]
    ];
  }

  executeCallback(callback: string) {
    this[callback]();
  }

  isValidCurrencyFormat: ValidatorFn = (control: AbstractControl): {[key: string]: any } | null => {
    if (control.value) {
      const value = control.value.match(/^((\.)?|(\d+)|(\d{1,3})(,\d{1,3})*)(\.\d{1,})?$/g);

      return !value[0] ? { isValidCurrency: true } : null;
    }
  }

  setData(data: any) {
    const productProperties = new ProductProperties();

    for (const key in data) {
      if (productProperties.__get().hasOwnProperty(key)) {
        this.product[key] = data[key];
      }
    }
  }

  updateProduct(): void {
    console.log(this.product);
    this.eps.saveProduct(this.product)
      .subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.loc.back();
  }

  goToAddProduct() {
    this.loc.go('products/add');
  }

}

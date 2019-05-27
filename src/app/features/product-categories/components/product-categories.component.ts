import { Component, OnInit } from '@angular/core';

import { faPlus, faEllipsisV, faTimes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { ProductCategory } from './product-category';
import { ProductCategoriesService } from '../services/product-categories.service';
import { AddProductCategoryService } from '../add-product-category/services/add-product-category.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  /* General Properties */
  pageTitle = 'Product Categories';

  fields: any;
  actions: any;

  productCategory: any = {
    name: '',
    image: '',
    desc: ''
  };

  isDone = false;

  /* For Categories List */
  productCategories: ProductCategory[];

  /* Miscellaneous */
  faPlus = faPlus;
  faEllipsisV = faEllipsisV;
  faTimes = faTimes;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private svc: ProductCategoriesService,
    private apcs: AddProductCategoryService,
    ) { }

  ngOnInit() {
    this.getProductCategories();
    this.prepareFields();
    this.prepareOptions();
  }

  getProductCategories(): void {
    this.svc.getProductCategories()
      .subscribe(
        productCategories => {
          this.productCategories = productCategories;
        }
      );
  }

  prepareFields(): void {
    this.fields = [
      [
        {
          id: 'categoryImage',
          dataID: 'image',
          type: 'image-upload',
          label: 'Select an image',
          value: ''
        },
      ],
      [
        {
          id: 'categoryName',
          dataID: 'name',
          type: 'text',
          label: 'Category Name',
          value: '',
          validations: [
            'required'
          ]
        },
        {
          id: 'categoryDesc',
          dataID: 'desc',
          type: 'textarea',
          label: 'Category Description',
          value: ''
        }
      ]
    ];
  }

  prepareOptions(): void {
    this.actions = [
      {
        text: 'Create',
        type: 'button',
        isPrimary: true,
        icon: faPlus,
        iconLocation: 'left',
        callback: {
          click: 'addProductCategory'
        }
      }
    ];
  }

  executeCallback(callback: string) {
    this[callback]();
  }

  setData(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key) && this.productCategory.hasOwnProperty(key)) {
        this.productCategory[key] = data[key];
      }
    }
  }

  addProductCategory(): void {
    if (!this.productCategory.name) { return; }

    this.apcs.addProductCategory(this.productCategory)
      .subscribe(
        () => {
          this.isDone = true;
          this.getProductCategories();
        }
      );
  }


}

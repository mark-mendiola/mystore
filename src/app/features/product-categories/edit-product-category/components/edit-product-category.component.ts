import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { EditProductCategoryService } from '../services/edit-product-category.service';
import { ProductCategory } from '../../components/product-category';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.scss']
})
export class EditProductCategoryComponent implements OnInit {

  title = 'Edit Category "';

  @Input() category: ProductCategory;

  headerOptions: any;

  fields: any;

  faSave = faSave;
  faTimes = faTimes;

  constructor(
    private epcs: EditProductCategoryService,
    private route: ActivatedRoute,
    private loc: Location
    ) { }

  ngOnInit() {
    this.setHeaderOptions();
    this.getProductCategory();
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
          click: 'updateProductCategory'
        }
      }
    ];
  }

  getProductCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.epcs.getProductCategory(id).subscribe(
      category => {
        this.category = category;
        this.postInit();
      }
    );
  }

  postInit(): void {
    this.prepareFields();
  }

  prepareFields(): void {
    this.fields = [
      [
        {
          id: 'categoryImage',
          dataID: 'image',
          type: 'image-upload',
          label: 'Select an image',
          value: this.category.image
        },
      ],
      [
        {
          id: 'categoryName',
          dataID: 'name',
          type: 'text',
          label: 'Category Name',
          value: this.category.name,
          validations: [
            'required'
          ]
        },
        {
          id: 'categoryDesc',
          dataID: 'desc',
          type: 'textarea',
          label: 'Category Description',
          value: this.category.desc
        }
      ]
    ];
  }

  executeCallback(callback: string) {
    this[callback]();
  }

  setData(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key) && this.category.hasOwnProperty(key)) {
        this.category[key] = data[key];
      }
    }
  }

  updateProductCategory(): void {
    this.epcs.saveProductCategory(this.category)
      .subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.loc.back();
  }

  goToCategoryDashboard() {
    this.loc.go('product-categories');
  }

}

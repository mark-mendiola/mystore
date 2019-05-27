import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AddProductCategoryService } from '../services/add-product-category.service';

import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent implements OnInit {

  pageTitle = 'Create New Product Category';

  labels: any = {
    product_cat_name: false,
    product_cat_desc: false
  };

  productCategory: any = {
    name: '',
    image: '',
    desc: ''
  };

  faTimes = faTimes;
  faCheck = faCheck;

  constructor(
    private apcs: AddProductCategoryService,
    private loc: Location
  ) { }

  ngOnInit() {
  }

  setImage(file: any) {
    const reader = new FileReader();

    reader.readAsDataURL(file[0]);

    reader.onload = (event) => {
      this.productCategory.image = reader.result;
    };
  }

  moveLabel(id: string, value: string) {
    if (value) {
      this.labels[id] = true;
    } else {
      this.labels[id] = false;
    }
  }

  addProductCategory(data: any): void {
    if (!data.name) { return; }

    this.apcs.addProductCategory(data)
      .subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.loc.back();
  }


}

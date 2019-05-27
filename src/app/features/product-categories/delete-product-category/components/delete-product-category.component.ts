import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductCategory } from '../../components/product-category';
import { DeleteProductCategoryService } from '../services/delete-product-category.service';

import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-product-category',
  templateUrl: './delete-product-category.component.html',
  styleUrls: ['./delete-product-category.component.scss']
})
export class DeleteProductCategoryComponent implements OnInit {

  pageTitle = 'Delete';

  productCategory: ProductCategory;

  faTrash = faTrash;
  faTimes = faTimes;

  constructor(
    private dpcs: DeleteProductCategoryService,
    private route: ActivatedRoute,
    private loc: Location
  ) { }

  ngOnInit() {
    this.getProductCategory();
  }

  getProductCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.dpcs.getProductCategory(id).subscribe(
      productCategory => this.productCategory = productCategory
    );
  }

  deleteProductCategory(): void {
    this.dpcs.deleteProductCategory(this.productCategory).subscribe(
      () => this.goBack()
    );
  }

  goBack(): void {
    this.loc.back();
  }

}

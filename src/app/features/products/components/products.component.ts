import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductsService } from '../services/products.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import {Observable, Subject, of} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { faPlus, faUpload, faEye, faEdit, faTrash, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  searchedProducts$: Observable<Product[]>;
  searchInvoked = false;
  currentProducts: Product[];
  private searchTerms = new Subject<string>();

  pageTitle = 'Products';

  productCategories = [];

  productsPerPage = 10;
  totalItems: number;

  actionProductId: number;

  faPlus = faPlus;
  faUpload = faUpload;
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faTimes = faTimes;
  faEllipsisV = faEllipsisV;

  constructor(
    private svc: ProductsService,
  ) {
    this.currentProducts = [];
  }

  ngOnInit() {
    this.getProducts();
    this.getProductCategories();
  }

  getProducts(): void {
    const that = this;

    if (!this.searchInvoked) {
      this.svc.getProducts()
        .subscribe(
          products => {
            that.products = products;

            /* Filter the products if search is on effect */
            that.filterProducts();

            that.totalItems = that.products.length;
            that.currentProducts = that.products.slice(0, this.productsPerPage);
          }
        );
    } else {
      this.filterProducts();
    }
  }

  getProductCategoryName(id: number): any {
    const cat = this.productCategories.filter(
      productCategory => productCategory.id === +id
    );

    if (cat.length > 0 && typeof cat[0].name !== 'undefined') {
      return cat[0].name;
    } else {
      return 'N/A';
    }
  }

  getProductCategories(): void {
    this.svc.getProductCategories().subscribe(
      productCategories => this.productCategories = productCategories
    );
  }

  filterProducts() {
    const that = this;

    this.searchedProducts$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.svc.searchProducts(term))
    );

    this.searchedProducts$.subscribe(
      products => {
        that.products = products;
        that.totalItems = that.products.length;
        that.currentProducts = that.products.slice(0, that.productsPerPage);
      }
    );
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.currentProducts = this.products.slice(startItem, endItem);
  }

  searchProducts(term: string): void {
    this.searchInvoked = true;
    this.searchTerms.next(term);
  }

  showActions(id: number): void {
    this.actionProductId = id;
  }

  hideActions(): void {
    this.actionProductId = 0;
  }

}

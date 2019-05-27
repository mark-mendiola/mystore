import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ProductCategory } from '../components/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  requestUrl = 'api/product_categories';

  constructor(
    private http: HttpClient
  ) { }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.requestUrl).pipe();
  }
}

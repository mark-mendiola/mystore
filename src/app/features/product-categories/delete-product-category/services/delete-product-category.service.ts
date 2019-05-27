import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProductCategory } from '../../components/product-category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeleteProductCategoryService {

  requestUrl = 'api/product_categories';

  constructor(
    private http: HttpClient
    ) { }

  getProductCategory(id: number): Observable<ProductCategory> {
    const url = `${this.requestUrl}/${id}`;
    return this.http.get<ProductCategory>(url).pipe();
  }

  deleteProductCategory(category: ProductCategory | number): Observable<ProductCategory> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.requestUrl}/${id}`;

    return this.http.delete<ProductCategory>(url, httpOptions).pipe();
  }
}

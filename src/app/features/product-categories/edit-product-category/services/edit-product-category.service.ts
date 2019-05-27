import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ProductCategory } from '../../components/product-category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class EditProductCategoryService {

  requestUrl = 'api/product_categories';

  constructor(
    private http: HttpClient
  ) { }

  getProductCategory(id: number): Observable<ProductCategory> {
    const url = `${this.requestUrl}/${id}`;
    return this.http.get<ProductCategory>(url, httpOptions).pipe();
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.requestUrl).pipe();
  }

  saveProductCategory(data: any): Observable<ProductCategory> {
    return this.http.put<ProductCategory>( this.requestUrl, data, httpOptions ).pipe();
  }
}

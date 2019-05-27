import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Product } from '../../components/product';
import { ProductCategory } from '../../../product-categories/components/product-category';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

  requestUrl = {
    products: 'api/products',
    categories: 'api/product_categories'
  };

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: number): Observable<Product> {
    const url = `${this.requestUrl.products}/${id}`;
    return this.http.get<Product>(url).pipe();
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.requestUrl.categories).pipe();
  }

  saveProduct(data: any): Observable<Product> {
    return this.http.put<Product>( this.requestUrl.products, data, httpOptions ).pipe();
  }
}

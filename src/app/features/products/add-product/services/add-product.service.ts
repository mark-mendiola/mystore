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
export class AddProductService {

  requestUrl = {
    products: 'https://my-json-server.typicode.com/mark-mendiola/mystore/products',
    categories: 'https://my-json-server.typicode.com/mark-mendiola/mystore/product_categories',
  };

  constructor(
    private http: HttpClient
  ) { }

  addProduct(data: any): Observable<Product> {
    return this.http.post<Product>( this.requestUrl.products, data ).pipe();
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.requestUrl.categories).pipe();
  }

}

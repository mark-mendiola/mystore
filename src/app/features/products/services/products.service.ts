import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Product } from '../components/product';
import { ProductCategory } from '../../product-categories/components/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  requestUrl = {
    products: 'https://my-json-server.typicode.com/mark-mendiola/mystore/products',
    categories: 'https://my-json-server.typicode.com/mark-mendiola/mystore/product_categories',
  };

  constructor(
    private http: HttpClient
    // private productEnv: ProductEnv,
    // private productCatEnv: ProductCatEnv
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.requestUrl.products).pipe();
  }

  searchProducts(term: string): Observable<Product[]> {
    console.log(term);
    if (!term.trim() || term === undefined) {
      return this.getProducts();
    }

    return this.http.get<Product[]>(`${this.requestUrl.products}/?name=${term}`).pipe();
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.requestUrl.categories).pipe();
  }

}

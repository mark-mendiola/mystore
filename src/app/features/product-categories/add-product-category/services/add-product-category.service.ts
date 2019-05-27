import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ProductCategory } from '../../components/product-category';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class AddProductCategoryService {

  requestUrl = 'api/product_categories';

  constructor(
    private http: HttpClient
    ) { }

    addProductCategory(data: any): Observable<ProductCategory> {
    return this.http.post<ProductCategory>( this.requestUrl, data, httpOptions ).pipe();
  }
}

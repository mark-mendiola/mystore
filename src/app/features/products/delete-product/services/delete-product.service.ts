import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../../components/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  requestUrl = 'api/products';

  constructor(
    private http: HttpClient
    ) { }

  getProduct(id: number): Observable<Product> {
    const url = `${this.requestUrl}/${id}`;
    return this.http.get<Product>(url).pipe();
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.requestUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe();
  }
}

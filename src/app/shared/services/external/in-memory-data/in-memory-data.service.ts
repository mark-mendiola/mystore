import { Injectable } from '@angular/core';

import { Product } from '../../../../features/products/components/product';
import { ProductCategory } from '../../../../features/product-categories/components/product-category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const products = [];
    const product_categories = [];

    return { products, product_categories };
  }

  genId<T extends Product | ProductCategory>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  }

}

import { Injectable } from '@angular/core';

import { Product, ProductProperties } from '../../components/product';
import { AddProductService } from '../../add-product/services/add-product.service';

@Injectable({
  providedIn: 'root'
})
export class ImportProductsService {

  constructor(
    private aps: AddProductService
  ) { }

  processFile(file: any, callback: any) {
    const reader = new FileReader();
    const ProductProps = new ProductProperties();
    const cols = Object.keys(ProductProps.__get());

    reader.readAsText(file);
    reader.onload = (e) => {
      const lines = reader.result.toString().split('\n');
      const fileCols = lines[0].replace(/, /g, ',').trim();

      /* Check if the first line are columns and are valid */
      if (fileCols !== cols.join(',')) {
        return;
      }

      delete lines[0];

      lines.forEach((line, lineNo) => {
        const product = new Product();
        let lineData = line.split(',');

        lineData = line.split(',');

        lineData.forEach((data, index) => {
          const col = cols[index];

          if (col !== 'id') {
            product[col] = data;
          }

        });

        this.aps.addProduct(product).subscribe(
          callback(lines.length)
        );
      });
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../components/product';
import { DeleteProductService } from '../services/delete-product.service';

import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  pageTitle = 'Delete';

  product: Product;

  faTrash = faTrash;
  faTimes = faTimes;

  constructor(
    private dps: DeleteProductService,
    private route: ActivatedRoute,
    private loc: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.dps.getProduct(id).subscribe(
      product => this.product = product
    );
  }

  deleteProduct(): void {
    this.dps.deleteProduct(this.product).subscribe(
      () => this.goBack()
    );
  }

  goBack(): void {
    this.loc.back();
  }

}

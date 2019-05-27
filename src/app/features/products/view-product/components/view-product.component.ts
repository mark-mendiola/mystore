import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../components/product';
import { ViewProductService } from '../services/view-product.service';

import { faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  @Input() product: Product;

  view = 'single';

  faEdit = faEdit;
  faArrowLeft = faArrowLeft;

  constructor(
    private vps: ViewProductService,
    private route: ActivatedRoute,
    private loc: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.vps.getProduct(id).subscribe(
      product => {
        this.product = product;
      }
    );
  }

  changeView(view: string): void {
    this.view = view;
  }

  goBack(): void {
    this.loc.back();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* 3rd Party */
import { PaginationModule } from 'ngx-bootstrap/pagination';

/* Own */
/* --- Modules */
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* --- Components */
import { ProductsComponent } from '../components/products.component';
import { AddProductComponent } from '../add-product/components/add-product.component';
import { EditProductComponent } from '../edit-product/components/edit-product.component';
import { ViewProductComponent } from '../view-product/components/view-product.component';
import { DeleteProductComponent } from '../delete-product/components/delete-product.component';
import { ImportProductsComponent } from '../import-products/components/import-products.component';

/* --- Directives */

/* Miscellaneous */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    DeleteProductComponent,
    ImportProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    PaginationModule.forRoot()
  ]
})
export class ProductsModule { }

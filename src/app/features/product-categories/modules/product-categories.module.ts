import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

/* --- Related Modules and Components */
import { ProductCategoriesRoutingModule } from './product-categories-routing.module';
import { ProductCategoriesComponent } from '../components/product-categories.component';
import { AddProductCategoryComponent } from '../add-product-category/components/add-product-category.component';
// import { ViewProductCategoryComponent } from '../view-product-category/components/view-product-category.component';
import { EditProductCategoryComponent } from '../edit-product-category/components/edit-product-category.component';
import { DeleteProductCategoryComponent } from '../delete-product-category/components/delete-product-category.component';

/* Miscellaneous */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductCategoriesComponent,
    AddProductCategoryComponent,
    // ViewProductCategoryComponent,
    EditProductCategoryComponent,
    DeleteProductCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductCategoriesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
})
export class ProductCategoriesModule { }

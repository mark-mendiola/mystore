import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoriesComponent } from '../components/product-categories.component';
import { AddProductCategoryComponent } from '../add-product-category/components/add-product-category.component';
// import { ViewProductCategoryComponent } from '../view-product-category/components/view-product-category.component';
import { EditProductCategoryComponent } from '../edit-product-category/components/edit-product-category.component';
import { DeleteProductCategoryComponent } from '../delete-product-category/components/delete-product-category.component';

const routes: Routes = [
  { path: '', component: ProductCategoriesComponent },
  { path: 'add', component: AddProductCategoryComponent },
  // { path: ':id', component: ViewProductCategoryComponent },
  { path: ':id/edit', component: EditProductCategoryComponent },
  { path: ':id/delete', component: DeleteProductCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoriesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../components/products.component';
import { AddProductComponent } from '../add-product/components/add-product.component';
import { EditProductComponent } from '../edit-product/components/edit-product.component';
import { ViewProductComponent } from '../view-product/components/view-product.component';
import { DeleteProductComponent } from '../delete-product/components/delete-product.component';
import { ImportProductsComponent } from '../import-products/components/import-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'import', component: ImportProductsComponent },
  { path: ':id', component: ViewProductComponent },
  { path: ':id/edit', component: EditProductComponent },
  { path: ':id/delete', component: DeleteProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

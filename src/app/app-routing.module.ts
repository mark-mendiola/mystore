import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: './features/products/modules/products.module#ProductsModule',
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products/add',
    loadChildren: './features/products/modules/products.module#ProductsModule',
  },
  {
    path: 'product-categories',
    loadChildren: './features/product-categories/modules/product-categories.module#ProductCategoriesModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

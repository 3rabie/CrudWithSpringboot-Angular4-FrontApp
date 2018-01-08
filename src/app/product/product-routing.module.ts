import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLdComponent } from './product-ld/product-ld.component';
import { ProductCuComponent } from './product-cu/product-cu.component';

const routes: Routes = [
  {path: 'product', component: ProductLdComponent},
  {path: 'product/create', component: ProductCuComponent},
  {path: 'product/update/:id', component: ProductCuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductLdComponent } from './product-ld/product-ld.component';
import { ProductCuComponent } from './product-cu/product-cu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductLdComponent, ProductCuComponent]
})
export class ProductModule { }

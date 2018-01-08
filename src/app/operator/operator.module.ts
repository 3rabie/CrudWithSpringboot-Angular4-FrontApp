import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorLdComponent } from './operator-ld/operator-ld.component';
import { OperatorCuComponent } from './operator-cu/operator-cu.component';

@NgModule({
  imports: [
    CommonModule,
    OperatorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OperatorLdComponent, OperatorCuComponent]
})
export class OperatorModule { }
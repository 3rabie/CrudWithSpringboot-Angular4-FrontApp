import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceLdComponent } from './service-ld/service-ld.component';
import { ServiceCuComponent } from './service-cu/service-cu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ServiceLdComponent, ServiceCuComponent]
})
export class ServiceModule { }

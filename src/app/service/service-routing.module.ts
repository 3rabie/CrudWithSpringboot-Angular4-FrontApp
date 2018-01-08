import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceLdComponent } from './service-ld/service-ld.component';
import { ServiceCuComponent } from './service-cu/service-cu.component';
const routes: Routes = [
  {path: 'service', component: ServiceLdComponent},
  {path: 'service/create', component: ServiceCuComponent},
  {path: 'service/update/:id', component: ServiceCuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorLdComponent } from './operator-ld/operator-ld.component';
import { OperatorCuComponent } from './operator-cu/operator-cu.component';
const routes: Routes = [
  {path: 'operator', component: OperatorLdComponent},
  {path: 'operaotr/create', component: OperatorCuComponent},
  {path: 'operator/update/:id', component: OperatorCuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
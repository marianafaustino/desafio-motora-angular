import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }

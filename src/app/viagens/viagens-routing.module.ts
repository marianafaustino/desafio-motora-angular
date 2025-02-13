import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViagensComponent } from './viagens.component';
import { ViagemDetalheComponent } from './viagem-detalhe/viagem-detalhe.component';

const routes: Routes = [
  { path: '', component: ViagensComponent },
  { path: ':id', component: ViagemDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViagensRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'viagens', loadChildren: () => import('./viagens/viagens.module').then(m => m.ViagensModule) },
  { path: 'motoristas', loadChildren: () => import('./motoristas/motoristas.module').then(m => m.MotoristasModule) },
  { path: 'veiculos', loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

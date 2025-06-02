import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'viagens', loadChildren: () => import('./viagens/viagens.module').then(m => m.ViagensModule) },
  { path: 'motoristas', loadChildren: () => import('./motoristas/motoristas.module').then(m => m.MotoristasModule) },
  { path: 'veiculos', loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'graficos', loadChildren: () => import('./graficos/graficos.module').then(m => m.GraficosModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

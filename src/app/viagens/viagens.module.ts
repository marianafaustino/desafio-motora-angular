import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagensRoutingModule } from './viagens-routing.module';
import { ViagensComponent } from './viagens.component';
import { ViagensService } from '../viagens.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ViagemDetalheComponent } from './viagem-detalhe/viagem-detalhe.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    ViagensComponent,
    ViagemDetalheComponent
  ],
  imports: [
    CommonModule,
    ViagensRoutingModule,
    MatTableModule,
    MatIconModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    ViagensService
  ],
  exports: [
    ViagensComponent, ViagemDetalheComponent
  ]
})
export class ViagensModule { }

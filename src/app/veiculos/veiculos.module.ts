import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { VeiculosService } from '../veiculos.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    MatTableModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    VeiculosService
  ],
  exports: [
    VeiculosComponent
  ]
})
export class VeiculosModule { }

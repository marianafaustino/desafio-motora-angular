import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { VeiculosService } from '../veiculos.service';


@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ],
  providers: [
    VeiculosService
  ],
  exports: [
    VeiculosComponent
  ]
})
export class VeiculosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';


@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ]
})
export class VeiculosModule { }

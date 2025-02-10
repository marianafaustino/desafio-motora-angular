import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagensRoutingModule } from './viagens-routing.module';
import { ViagensComponent } from './viagens.component';


@NgModule({
  declarations: [
    ViagensComponent
  ],
  imports: [
    CommonModule,
    ViagensRoutingModule
  ]
})
export class ViagensModule { }

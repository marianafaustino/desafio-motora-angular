import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagensRoutingModule } from './viagens-routing.module';
import { ViagensComponent } from './viagens.component';
import { ViagensService } from '../viagens.service';


@NgModule({
  declarations: [
    ViagensComponent
  ],
  imports: [
    CommonModule,
    ViagensRoutingModule
  ],
  providers: [
    ViagensService
  ],
  exports: [
    ViagensComponent
  ]
})
export class ViagensModule { }

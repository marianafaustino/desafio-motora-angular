import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagensRoutingModule } from './viagens-routing.module';
import { ViagensComponent } from './viagens.component';
import { ViagensService } from '../viagens.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViagensComponent
  ],
  imports: [
    CommonModule,
    ViagensRoutingModule,
    MatTableModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    ViagensService
  ],
  exports: [
    ViagensComponent
  ]
})
export class ViagensModule { }

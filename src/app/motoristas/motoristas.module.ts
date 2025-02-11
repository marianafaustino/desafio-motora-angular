import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasRoutingModule } from './motoristas-routing.module';
import { MotoristasComponent } from './motoristas.component';
import { MotoristasService } from '../motoristas.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MotoristasComponent
  ],
  imports: [
    CommonModule,
    MotoristasRoutingModule,
    MatTableModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    MotoristasService
  ],
  exports: [
    MotoristasComponent
  ]
})
export class MotoristasModule { }

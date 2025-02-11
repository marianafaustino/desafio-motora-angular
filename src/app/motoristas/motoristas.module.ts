import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasRoutingModule } from './motoristas-routing.module';
import { MotoristasComponent } from './motoristas.component';
import { MotoristasService } from '../motoristas.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { StatusPipe } from '../pipes/status.pipe';


@NgModule({
  declarations: [
    MotoristasComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    MotoristasRoutingModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    MotoristasService
  ],
  exports: [
    MotoristasComponent,
    StatusPipe
  ]
})
export class MotoristasModule { }

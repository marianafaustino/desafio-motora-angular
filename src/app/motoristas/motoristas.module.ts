import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasRoutingModule } from './motoristas-routing.module';
import { MotoristasComponent } from './motoristas.component';
import { MotoristasService } from '../motoristas.service';


@NgModule({
  declarations: [
    MotoristasComponent
  ],
  imports: [
    CommonModule,
    MotoristasRoutingModule
  ],
  providers: [
    MotoristasService
  ],
  exports: [
    MotoristasComponent
  ]
})
export class MotoristasModule { }

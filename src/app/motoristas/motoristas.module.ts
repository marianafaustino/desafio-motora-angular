import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasRoutingModule } from './motoristas-routing.module';
import { MotoristasComponent } from './motoristas.component';


@NgModule({
  declarations: [
    MotoristasComponent
  ],
  imports: [
    CommonModule,
    MotoristasRoutingModule
  ]
})
export class MotoristasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MapaComponent } from '../mapa/mapa.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

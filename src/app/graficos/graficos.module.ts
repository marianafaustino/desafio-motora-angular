import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './graficos.component';
import { GraficosRoutingModule } from './graficos.routing.module';
import { RadarEventosComponent } from './radar-eventos/radar-eventos.component';
import { BarraEventosComponent } from './barra-eventos/barra-eventos.component';



@NgModule({
  declarations: [
    GraficosComponent,
    RadarEventosComponent,
    BarraEventosComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ],
  exports: [
    GraficosComponent,
    BarraEventosComponent
  ]
})
export class GraficosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './graficos.component';
import { GraficosRoutingModule } from './graficos.routing.module';



@NgModule({
  declarations: [
    GraficosComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ],
  exports: [
    GraficosComponent
  ]
})
export class GraficosModule { }

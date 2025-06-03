import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './graficos.component';
import { GraficosRoutingModule } from './graficos.routing.module';
import { RadarEventosComponent } from './radar-eventos/radar-eventos.component';
import { BarraEventosComponent } from './barra-eventos/barra-eventos.component';
import { LinhaPenalidadeComponent } from './linha-penalidade/linha-penalidade.component';
import { ScoreGraficoComponent } from './score-grafico/score-grafico.component';
import { RankingMotoristaComponent } from './ranking-motorista/ranking-motorista.component';
import { ListaEventosGraficoComponent } from './lista-eventos-grafico/lista-eventos-grafico.component';



@NgModule({
  declarations: [
    GraficosComponent,
    RadarEventosComponent,
    BarraEventosComponent,
    LinhaPenalidadeComponent,
    ScoreGraficoComponent,
    RankingMotoristaComponent,
    ListaEventosGraficoComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ],
  exports: [
    GraficosComponent,
    BarraEventosComponent,
    LinhaPenalidadeComponent
  ]
})
export class GraficosModule { }

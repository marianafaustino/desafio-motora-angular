import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MotoristasModule } from './motoristas/motoristas.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ViagensModule } from './viagens/viagens.module';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { NovoItemDialogComponent } from './novo-item-dialog/novo-item-dialog.component';
import { MotoristaFormComponent } from './forms/motorista-form/motorista-form.component';
import { ViagemFormComponent } from './forms/viagem-form/viagem-form.component';
import { VeiculoFormComponent } from './forms/veiculo-form/veiculo-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, NovoItemDialogComponent, MotoristaFormComponent, ViagemFormComponent, VeiculoFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    MotoristasModule,
    VeiculosModule,
    ViagensModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
  exports: [
    MotoristaFormComponent, ViagemFormComponent, VeiculoFormComponent
  ]
})
export class AppModule { }


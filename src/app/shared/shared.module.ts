import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradutorPipe } from '../pipes/tradutor.pipe';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FiltroMenuComponent } from '../filtro-menu/filtro-menu.component';

@NgModule({
  declarations: [TradutorPipe, SearchBarComponent, FiltroMenuComponent], 
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    TradutorPipe, 
    SearchBarComponent,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FiltroMenuComponent
  ] 
})
export class SharedModule { }


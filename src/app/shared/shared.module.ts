import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradutorPipe } from '../pipes/tradutor.pipe';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TradutorPipe, SearchBarComponent], 
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [TradutorPipe, SearchBarComponent] 
})
export class SharedModule { }


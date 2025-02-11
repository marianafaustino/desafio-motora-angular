import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradutorPipe } from '../pipes/tradutor.pipe';

@NgModule({
  declarations: [TradutorPipe], 
  imports: [CommonModule],
  exports: [TradutorPipe] 
})
export class SharedModule { }


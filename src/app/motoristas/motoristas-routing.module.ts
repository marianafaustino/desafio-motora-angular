import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoristasComponent } from './motoristas.component';

const routes: Routes = [
  { path: '', component: MotoristasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoristasRoutingModule { }

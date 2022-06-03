import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacotesComponent } from './pacotes/pacotes.component';

const routes: Routes = [
  {
    path: '', component: PacotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacoteRoutingModule { }
